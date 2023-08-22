const baseURL = "https://drive.google.com/uc?export=view&id="
const photoID = [
    [
        { id: "1wg1Kv4qz6EtL_gaqvuljDHLShAByaFkt", col: 1, alt: "Street" },
        { id: "1Tfz8rxCO0Xbt_30ZK-xLC_TKi-Pc77Pa", col: 1, alt: "Aidan" },
        { id: "12iO3Y2w_nzQw4j3qNdLZgj2X804WQil5", col: 1, alt: "Aidan" },
        { id: "1EqK4ouN7TTXCD6mm_eLAd1y8IzNYEJ_2", col: 1, alt: "Uzbek" },
        { id: "1qyDgKM6GluW3p9s3I3ewl11J4xn1SAFe", col: 1, alt: "Mike G" },
        
        
    
        { id: "1xqGcOVvmYfXBi0EhNZ-SY3feWfWFINBa", col: 2, alt: "Sidney" },
        { id: "1d51LigjaLLsIXcgOkECiCKRDtjpYAAfw", col: 2, alt: "Courtney" },
        { id: "1dbCEIo0ryuyXi4hrE1IhcuyCuZlPkhD0", col: 2, alt: "Love" },
        { id: "1N319EMNEpV5vIVclw7fy1roMUYsImrhj", col: 2, alt: "Aidan" },
        { id: "1eTvvbYGoLsnwetPOjl3HyIc6L2ouR8st", col: 2, alt: "Daniel" },

        { id: "1tXhYQEc77H7ld9oIllqIx6F_7kpAnx-R", col: 3, alt: "Uzbek" },
        { id: "1Z4IxhAeDDJtXhc-L-e3thrdMfR31bYnK", col: 3, alt: "Sidney" },
        { id: "1l5eaIuSQBbWsytGPRgQgPc2ZRf_1yZ0T", col: 3, alt: "Mike G" },
        { id: "1l2y-ITI89hvycHqhzWDRnRhOTYyW89-r", col: 3, alt: "Mike G" },
        { id: "1Tye86lCkscUKJwl0w5idvHNMB3nbJ7b5", col: 3, alt: "Lachlan" },
        
    ],

    [
        { id: "1ZnA_ja_0zeUzF4xgH2CGAhGN1-zuyUfB", col: 1, alt: "Robb" },
        { id: "1i0Fkf5Xi6Vo3xCtZ60KnbJrSORMJ7y9f", col: 1, alt: "Julia" },
        { id: "1UeuCCvYBYSx_7mKgrYhqlV54znbmSPzZ", col: 1, alt: "Zoe" },
        { id: "19F6rpm-BcdcuMxc1fCKmZtohLvutPwc6", col: 1, alt: "Idobi Show" },
        
        { id: "1Oy5e4tl7UqnjqI6OXHLyU21H1EjJXOcm", col: 2, alt: "Moonlander" },
        { id: "1FKoK3qtkRixMEPHjXcuhZGxuTMCV55oa", col: 2, alt: "Zoe" },
        { id: "13_eNsS7Rsh_AGtxZCJkbUJcyIYGlErSo", col: 2, alt: "Robb" },
        { id: "1kb6jdW6VTHikl8-09Jj1_-_rb517q_7g", col: 2, alt: "Coey" },
        

        { id: "1qwvbDEh5DFpYrT6EvqCOL5HxAog3YEJh", col: 3, alt: "Yung Pinch" },
        { id: "1K47LTK8KaZsJkfGDQsgDZgaDTJMyzWlf", col: 3, alt: "Robb" },
        { id: "1T7Ww0Y9sh81w9yk7Bqs6wYsYVt8g95SM", col: 3, alt: "Vinny" },
        { id: "1qS5AA-c0GzRPYKI_QjcV5expHs5S03xb", col: 3, alt: "Richard" },
        
    ],

    [
        { id: "1J1xjTOZN4JXQjFmndrcR16PYCqgt-I0Y", col: 1, alt: "Aidan" },
        { id: "1c5Ocr_waz-AsjZQBxoqF_QlIHh6_GVaO", col: 1, alt: "El Capitan" },
        { id: "16LQj_-bU-Xv8RqDkNJRX641ZC52lqHpm", col: 1, alt: "the Sequoias" },

        { id: "1-pF8VbQK-OAnu2Cp0v3JrHHU3gIgPXD1", col: 2, alt: "Sunrise" },
        { id: "10jIOSPKilf96E3Z1SFx73AK7hcgwvtjP", col: 2, alt: "Francis" },
        { id: "1032BrBbPrWPcUWcDr15-84t-jKkqemV3", col: 2, alt: "Shelby and Michael" },

        { id: "1mZdeUdmcF1eQ5OIXl8X6pCgzTfeD4Z98", col: 3, alt: "Pool Day" },
        { id: "1mI85FZ7o4k117QsKWZ7q55OH2Sc-nSoO", col: 3, alt: "Talia" },
        { id: "1wB_jdC3bs2zE3R0DZF1BLPR5RilACjpm", col: 3, alt: "Daniel" }
    ]
]

function getPhotosForCol(photos, col) {
    return photos.filter(p => p.col == col).map(p => {
        return `<img src="${baseURL}${p.id}" alt="${p.alt}" />`
    })

}

function photosForColumns(photoID, targetPhotoID) {
    const targetPhoto = document.getElementById(targetPhotoID)

    for (let x = 1; x <= 3; x++) {
        const images = getPhotosForCol(photoID, x)
        targetPhoto.innerHTML += `<div class="column">${images.join("")}</div>`
    }
}


photosForColumns(photoID[0], "portraits");
photosForColumns(photoID[1], "shows");
photosForColumns(photoID[2], "landscape");
