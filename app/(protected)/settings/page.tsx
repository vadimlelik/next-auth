import {auth, signOut} from "@/auth";

const Settings = async () => {
    const session = await auth();
    return <div>
        Settings page {JSON.stringify(session)}
        <form action={async () => {
            'use server'
            await signOut()
        }}>
            <button>
                Sign out
            </button>
        </form>
    </div>;
};

export default Settings;
