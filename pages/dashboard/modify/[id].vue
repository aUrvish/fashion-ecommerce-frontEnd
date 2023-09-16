<template>
    <NuxtLayout name="app">
        <div class="dd-add">
            <h1>Modify Product</h1>

            <div class="dd-add-prduct">
                <form ref="formEl" @submit.prevent="submitform(formEl)">
                    <div class="dd-id">
                        <label for="id">Product ID</label>
                        <br>
                        <input type="number" name="pid" id="id" :value="gid">
                    </div>
                    <div class="dd-name">
                        <label for="name">Product Name</label>
                        <br>
                        <input type="text" name="pname" v-model="formData.name" id="name" placeholder="product name"
                            required>
                    </div>
                    <div class="dd-cat">
                        <label for="cat">Catagory</label>
                        <br>
                        <select id="cat" v-model="formData.catagory" name="cate">
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="baby">Baby</option>
                        </select>
                    </div>
                    <div class="dd-cat">
                        <label for="ptype">Product type</label>
                        <br>
                        <select id="ptype" v-model="formData.ptype" name="ptype">
                            <option value="jeans">Shirts & Jeans</option>
                            <option value="sarees">Sarees</option>
                            <option value="shoes">shoes</option>
                            <option value="watches">Watches</option>
                            <option value="sunglasses">Sunglasses</option>
                            <option value="kurtas">Kurtas</option>
                            <option value="boys">Baby Boys</option>
                            <option value="girls">Baby Girls</option>
                        </select>
                    </div>
                    <div class="dd-cat">
                        <label for="psize">Size</label>
                        <br>
                        <select id="psize" v-model="formData.psize" name="psize">
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">Xl</option>
                        </select>
                    </div>
                    <div class="desc">
                        <label for="desc">Product Description</label>
                        <br>
                        <textarea v-model="formData.description" rows="10" name="desc" id="desc" placeholder="text here.."
                            required></textarea>
                    </div>

                    <div class="dd-stock">
                        <label for="stock">Stock</label>
                        <br>
                        <input v-model="formData.stock" type="number" name="stock" id="stock" placeholder="stock" required>
                    </div>
                    <div class="dd-brand">
                        <label for="mrp">Price: (MRP)</label>
                        <br>
                        <input v-model="formData.mrp" type="number" id="mrp" name="mrp" placeholder="price">
                    </div>
                    <div class="dd-brand">
                        <label for="sell">Price: (sell)</label>
                        <br>
                        <input v-model="formData.sell" type="number" id="sell" name="sell" placeholder="price">
                    </div>
                    <div class="dd-brand">
                        <label for="brand">Brand</label>
                        <br>
                        <input v-model="formData.brand" type="text" id="brand" placeholder="brand" name="brand">
                    </div>
                    <button type="submit" name="submit" class="submit">Submit</button>
                </form>
            </div>
            <Notification :msg="message.msg" :isError="message.isError" />
        </div>
    </NuxtLayout>
</template>

<script setup>
const { baseURL } = useRuntimeConfig().public
const formEl = ref(null)
const response = ref(null)
const message = ref({ msg: '', isError: false })
const gid = ref(null)
const fetchalldata = ref(null)
const route = useRoute()


const submitform = async (form) => {
    const fd = new FormData(form);
    fetch(`${baseURL}/product/modify/`, {
        method: 'POST',
        body: fd,
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => { response.value = JSON.parse(result); message.value.msg = response.value.message; message.value.isError = response.value.error })
        .catch(error => { message.value.msg = 'Network Error', message.value.isError = true });
}

onMounted(() => { fetchrealdata() })

const fetchrealdata = () => {
    fetch(`${baseURL}/product/single/`, { method: 'POST', body: JSON.stringify({ id: route.params.id }), redirect: 'follow' })
        .then(response => response.text())
        .then(result => {
            fetchalldata.value = JSON.parse(result)
            gid.value = fetchalldata.value.data.id; 
            formData.name = fetchalldata.value.data.pname;
            formData.catagory = fetchalldata.value.data.catagory;
            formData.ptype = fetchalldata.value.data.ptype;
            formData.psize = fetchalldata.value.data.size;
            formData.description = fetchalldata.value.data.description;
            formData.stock = fetchalldata.value.data.stock;
            formData.brand = fetchalldata.value.data.brand;
            formData.mrp = fetchalldata.value.data.mrp;
            formData.sell = fetchalldata.value.data.sell;
        })
        .catch(error => console.log('error', error));

}

const formData = reactive({
    name: null,
    catagory: '',
    ptype : '',
    psize : '',
    description: null,
    stock: null,
    brand: null,
    mrp: null,
    sell: null
})
</script>

<style scoped lang="scss">
.dd-add {
    font-family: 'Nunito';

    .dd-add-prduct {
        background-color: #fff;
        border: 1px solid #E6E6E6;
        border-radius: 14px;
        padding: 20px;

        form {

            .dd-id {
                label {
                    font-size: 18px;
                }

                input {
                    margin-top: 5px;
                    border: 1px solid #E6E6E6;
                    background-color: #f5f7f8;
                    color: #00000080;
                    padding: 10px 12px;
                    border-radius: 8px;
                    max-width: 300px;
                    width: 100%;
                    pointer-events: none;
                }
            }

            .dd-name {
                margin-top: 15px;

                label {
                    font-size: 18px;
                }

                input {
                    margin-top: 5px;
                    border: 1px solid #E6E6E6;
                    background-color: #f5f7f8;
                    padding: 10px 12px;
                    border-radius: 8px;
                    max-width: 300px;
                    width: 100%;
                }
            }

            .dd-img {
                margin: 20px 0;

                label {
                    font-size: 18px;
                }

                .dd-file {
                    margin-top: 5px;
                    border: 1px solid #E6E6E6;
                    background-color: #f5f7f8;
                    padding: 5px 12px;
                    border-radius: 8px;
                    width: fit-content;

                    p {
                        margin: 0;
                        text-transform: capitalize;
                    }

                    input {
                        display: none;
                    }
                }

                .images {
                    display: flex;
                    margin-top: 20px;

                    img {
                        width: 100px;
                        aspect-ratio: 1;
                        object-fit: contain;
                        background-color: #f5f7f8;
                        margin: 0 5px;
                        border: 1px solid #E6E6E6;
                        border-radius: 10px;
                    }
                }
            }

            .dd-cat {
                margin-top: 15px;

                label {
                    font-size: 18px;
                }

                select {
                    outline: none;
                    max-width: 320px;
                    width: 100%;
                    margin-top: 5px;
                    border: 1px solid #E6E6E6;
                    background-color: #f5f7f8;
                    padding: 10px 12px;
                    border-radius: 8px;
                }
            }

            .desc {
                margin-top: 15px;

                label {
                    font-size: 18px;
                }

                textarea {
                    outline: none;
                    max-width: 300px;
                    resize: none;
                    width: 100%;
                    margin-top: 5px;
                    border: 1px solid #E6E6E6;
                    background-color: #f5f7f8;
                    padding: 10px 12px;
                    border-radius: 8px;
                }
            }

            .dd-stock,
            .dd-brand {
                margin-top: 15px;

                label {
                    font-size: 18px;
                }

                input {
                    outline: none;
                    max-width: 300px;
                    width: 100%;
                    margin-top: 5px;
                    border: 1px solid #E6E6E6;
                    background-color: #f5f7f8;
                    padding: 10px 12px;
                    border-radius: 8px;
                }
            }

            .dd-color {
                padding: 30px 0;

                label {
                    font-size: 18px;
                }

                input {
                    outline: none;
                    margin-top: 5px;
                    border: none;
                    background-color: #f5f7f8;
                    border-radius: 8px;
                }

                .colorBtn {
                    background-color: #f5f7f8;
                    outline: none;
                    border: 1px solid #ddd;
                    padding: 0 3px;
                    border-radius: 5px;
                    margin: 0 5px;
                    line-height: 75%;
                    font-size: 20px;
                    cursor: pointer;
                }

                .sub-color {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 1px solid #ddd;
                    box-sizing: border-box;
                    margin-right: 5px;
                }
            }

            .submit {
                background-color: #3b71ca;
                border: none;
                padding: 5px 20px;
                color: white;
                border-radius: 5px;
                font-weight: 700;
                font-size: 18px;
                box-shadow: 0 10px 8px -9px #3b71ca;
            }
        }
    }
}
</style>