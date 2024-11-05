import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((e) => {
          if (e instanceof CanceledError) return;
          setError(e.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, errors, loading };
};

export default useData;
