import { useEffect, useState } from "react";

export default function Success() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    // by the time user lands here, webhook should have written the DB
    setOk(true);
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>🎉 Subscription active!</h1>
      <p>Your payment was successful. You can manage your account below.</p>
      <a href="/account">Go to Account</a>
    </div>
  );
}
