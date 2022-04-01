import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
            showMessage({ title: "ログインしました", status: "success" });
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
          }
        })
        .catch((err) =>
          showMessage({ title: "ログインできません", status: "error" })
        )
        .finally(() => setLoading(false));
    },
    [history, showMessage]
  );
  return { login };
};
