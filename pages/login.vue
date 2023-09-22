<template>
    <div class="dd-login">
        <div class="dd-auth">
            <h1>Log in</h1>
            <p>Betcha can’t eat just one</p>
            <form method="POST" @submit.prevent="loginsubmit">
                <div>
                    <label>Email :</label>
                    <Textbox placeholder="Email" style="margin-top: 5px;" :value="username" @atInput="(val) => username = val" />
                </div>
                <div class="dd-password">
                    <label>Password :</label>
                    <Textbox placeholder="jone@example.com" style="margin-top: 5px;" :value="Password" @atInput="(val) => Password = val" />
                </div>
                <ButtonType2 type="submit" bgColor="#3b71ca" style="width: 100%;" text="Log In" radius="5px" />
                <div class="new">
                    <NuxtLink :to="{ name: 'signup' }">Create new account?</NuxtLink>
                </div>
            </form>
            <Notification :msg="msg" :isError="isError" />
        </div>
    </div>
</template>

<script setup>


const { baseURL } = useRuntimeConfig().public
const username = ref(null);
const Password = ref(null);
const msg = ref(null)
const isError = ref(null)

const loginsubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch(`${baseURL}/auth/`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            username: username.value,
            password: Password.value
        }),
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => {
            const {message,isValid,error} = JSON.parse(result);
            msg.value = message
            isError.value = error

            if(isValid){
                localStorage.setItem('authTokan' , JSON.stringify({username : username.value , password : Password.value}))
                useRouter().push({name : 'dashboard'})
            }
        })
        .catch(error => {
            msg.value = "Network error"
            isError.value = false
        });
}
</script>

<style scoped lang="scss">
.dd-login {
    height: 100vh;
    max-width: 1536px;
    margin: 0 auto;
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