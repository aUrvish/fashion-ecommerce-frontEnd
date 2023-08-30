<template>
    <div class="dd-login">
        <div class="dd-auth">
            <h1>Sign Up</h1>
            <p>Yes, sign me up!</p>
            <form>
                <div>
                    <label>Username :</label>
                    <Textbox placeholder="Jone Deo" style="margin-top: 5px;" />
                </div>
                <div>
                    <label>Email :</label>
                    <Textbox placeholder="jone@example.com" style="margin-top: 5px;" />
                </div>
                <div class="dd-password">
                    <label>Password :</label>
                    <Textbox placeholder="Password" style="margin-top: 5px;" />
                </div>
                <ButtonType2 bgColor="#3b71ca" style="width: 100%;" text="Sign Up" radius="5px" />
                <div class="new">
                    <NuxtLink :to="{name : 'login'}" >Already have an account?</NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dd-login {
    height: 100vh;
    margin: 0 auto;
    max-width: 1536px;
    display: flex;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    font-family: 'Nunito';

    .dd-auth {
        width: 100%;
        grid-column-start: 3;
        grid-column-end: 4;
        padding: 20px;
        border-radius: 10px;
        background-color: #f5f6f9;

        h1 {
            margin: 0;
        }

        p {
            margin-top: 0;
        }

        .dd-password {
            margin: 10px 0;
        }

        label {
            font-size: 17px;
        }

        .new {
            text-decoration: none;
            padding-top: 10px;

            a {
                text-decoration: none;
            }
        }
    }

    @media screen and (max-width : 999px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 0 16px;

        .dd-auth {
            grid-column-start: 0;
            grid-column-end: 1;
            box-sizing: border-box;
        }
    }
}
</style>