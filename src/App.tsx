import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import UserCard from "./components/UserCard";
import { UserData } from "./components/UserCard/UserCard.props";
import Form from "./components/Form";
import { InputValues } from "./types/Form.types";
import Input from "./components/elements/Input";
import Button from "./components/elements/Button";
import "./style.css";
import { debounce } from "./utils/debounce";

enum RequestStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
  NOT_FETCHED = "not_fetched",
}

function App() {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.NOT_FETCHED
  );

  useEffect(() => {
    if (window.location.search) {
      const querySearch = window.location.search.split("=")[1];
      console.log(querySearch);
      if (querySearch !== userData.login) {
        onSearch(querySearch);
      }
    }
  }, []);

  const fetchUserInfo = async (username: string) => {
    const response: AxiosResponse<UserData> = await axios.get(
      `https://api.github.com/users/${username}`
    );
    if (response.status !== 200) {
      throw new Error("user not found");
    }
    return response;
  };

  const onSearch = async (data: string) => {
    try {
      setRequestStatus(RequestStatus.LOADING);
      const res = await fetchUserInfo(data);
      setUserData(res.data);
      setRequestStatus(RequestStatus.SUCCESS);
      window.history.replaceState(
        {},
        "",
        `/?login=${res.data.login.toLowerCase()}`
      );
    } catch (e) {
      setRequestStatus(RequestStatus.ERROR);
      console.log(`Пользователь ${data} не найден`);
    }
  };

  const onChangeWithDebounce = debounce(onSearch, 800);

  return (
    <div id="app">
      <div className={"app-container"}>
        <Form<InputValues>
          className={"app-form"}
          onSubmit={(data) => onSearch(data.username)}
        >
          {({ register }) => (
            <>
              <Input
                className={"app-input"}
                {...register("username", {
                  required: true,
                  onChange: (e) => onChangeWithDebounce(e.target.value),
                })}
              />
              <Button
                disabled={requestStatus === RequestStatus.LOADING}
                className={"app-form_btn"}
              >
                Найти
              </Button>
            </>
          )}
        </Form>
        {requestStatus === RequestStatus.LOADING && <h3>Загрузка данных...</h3>}
        {requestStatus === RequestStatus.SUCCESS && (
          <UserCard userData={userData} />
        )}
      </div>
    </div>
  );
}

export default App;
