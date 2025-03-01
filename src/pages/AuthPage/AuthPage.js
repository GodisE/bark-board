import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({ setUser, user }) {
    return (
        <>
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser} user={user} />
            <LoginForm setUser={setUser} user={user} />
        </>
    )
}