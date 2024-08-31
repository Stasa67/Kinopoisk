<template>
    <div class="header">
        <div class="header_title">
            КИНОПОИСК
        </div>
        <div class="header_button">
            <div class="header_button_cinema">
                Онлайн-Кинотеатр
            </div>
            <div class="header_button_cartoon">
                Смотреть мультики
            </div>
            <input 
                class="header_button_input"
                placeholder="Фильмы, сериалы, персоны"
            >
        </div>
        <div class="header_person">
            <!-- <unicon 
                name="BookmarkSolid"
                class="header_person_mark"
            >
            </unicon> -->
            <div class="header_person_user">
                <!-- <unicon 
                    name="User"
                    class="header_person_user_icon"
                >
                </unicon> -->
                <img 
                    class="header_person_user_img"
                    src="https://avatars.mds.yandex.net/get-kino-vod-users-avatar/28790/2a0000016a73f945583a0cadf35438dfdaec/80x80">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent"
}

</script>

<style scoped lang="less">
.header {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;
    height: 104px;
    background-color: #141414;
    color: #ffffff99;
    font-family: var(--font-family, "Graphik Kinopoisk LC Web", Tahoma, Arial, Verdana, sans-serif);

    &_title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 40px;
        font-size: 34px;
        font-weight: 600;
        color: #ffffff;
        cursor: pointer;
    }

    &_button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 220px;

        &_cinema {
            font-size: 22px;
            margin-right: 30px;
            cursor: pointer;
            transition: 1s;

            &:hover {
                color: #ffffff;
            }  
        }

        &_cartoon {
            font-size: 22px;
            margin-right: 30px;
            cursor: pointer;
            transition: 1s;

            &:hover {
                color: #ffffff;
            }  
        }

        &_input {
            height: 34px;
            width: 550px;
            border-radius: 12px;
            border: none;
            outline: none;
            padding: 8px 0 8px 16px;
            color: #000;
            font-size: 20px;
        }
    }

    &_person {
        display: flex;
        justify-content: center;
        align-items: center;

        &_user {
            cursor: pointer;

            &_img {
                width: 70px;
                cursor: pointer;

            }
        }
    }
}
</style>
