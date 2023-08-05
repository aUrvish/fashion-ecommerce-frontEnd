<template>
    <div class="dd-service">
        <div class="s1">
            <Icon name="fa6-solid:truck-fast" class="icon" />
            <p>Super Fast and Free Delivery</p>
        </div>
        <div class="s2">
            <Icon name="mdi:security" class="icon" />
            <p>Non-contact Shipping</p>
        </div>
        <div class="s3">
            <Icon name="fa6-solid:money-bill-1-wave" class="icon" />
            <p>Money-back Guaranteed</p>
        </div>
        <div class="s4">
            <Icon name="fa6-solid:money-check-dollar" class="icon" />
            <p>Super Secure Payment System</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>    
.dd-service {
        font-family: 'Nunito';
        margin: 50px auto;
        width: 90%;
        max-width: 1536px;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        overflow: hidden;
        gap: 2rem;

        .s1,
        .s2,
        .s3,
        .s4 {
            text-align: center;
            border: 1px solid rgba(100, 126, 255, .5);
            padding: 16px;
            display: grid;
            place-items: center;
            font-size: 1.5rem;
            border-radius: 16px;
            background-image: linear-gradient(to bottom right, rgba(66, 211, 146, .3), rgba(100, 126, 255, 0.3));
            color: #000;
            box-shadow: 0 0 15px 0 rgba(0, 0, 0, .15);

            .icon {
                font-size: 45px;
            }
        }


        .s1 {
            grid-row: 1/3;
            height: 50%;
        }

        .s4 {
            height: 50%;
            grid-row: 1/3;
            grid-column: 3/4;
        }


        @media (max-width: 600px) {
            display: block;
            
            .s1 , .s2, .s3, .s4 {
                margin: 15px 0;
            }
        }
    }
</style>