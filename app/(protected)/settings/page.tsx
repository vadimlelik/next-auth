import { auth } from "@/auth";

const Settings = async () => {
  const session = await auth();
  return <div> Settings page {JSON.stringify(session)} </div>;
};

export default Settings;
