import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const { data } = await Axios.get(url);
      setPayload(data);
    } catch (error) {
      setError("에러났음ㅠㅠ");
    } finally {
      setLoading(false);
    }
  };
  // 처음 나올때만 되면되기때문에 2번째엔 빈배열을 넣는다.
  useEffect(() => {
    callUrl();
  }, []);
  return { payload, loading, error };
}

const Practice = () => {
  const { payload, loading, error } = useFetch("https://aws.random.cat/meow");
  return (
    <div>
      {loading && <span>로딩중입니다.</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && <img src={payload.file} />}
    </div>
  );
};

export default Practice;
