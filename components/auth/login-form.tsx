import CardWrapper from './card-wrapper';

const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcom back"
            backBUttonLabel="Don,t have an account"
            backButtonHref="/auth/register"
            showSocial
        >
            LoginForm
        </CardWrapper>
    );
};

export default LoginForm;
