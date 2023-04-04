/// @ 0.12.4

// #1日1回お寿司食べるかなチャレンジ
let foodList = [
	{ 
        emoji: "" 
        mes: "たべれませんでした"
    }
	{ 
        emoji: ":biological_server:" 
        mes: "のうみそぱくぱく"
    }
	{ 
        emoji: ":desyo:" 
        mes: "OSUSHI!!"
    }
]

let charaList = [
	{ 
        emoji: ":ablobcatcryingcute:" 
        mes: "食べれなくて悲しい"
    }
	{ 
        emoji: ":meow_hungry_anim:" 
        mes: "食べれて嬉しい"
    }
]

let random = Math:gen_rng(`{USER_ID}{Date:year()}{Date:month()}{Date:day()}`)

let challengeNum = random(0 (foodList.len - 1))

let food = foodList[challengeNum].emoji
let foodMes = foodList[challengeNum].mes

let chara = ""

if (challengeNum == 0) {
    chara = charaList[0].emoji
  } else {
    chara = charaList[1].emoji
  }


let result = {text: `{food} {chara} {foodMes} {Str:lf}#1日1回お寿司食べるかなチャレンジ`}

//playデバッグ用
// Ui:render([
// 	Ui:C:button({
// 		text: "CHECK!"
// 		onClick: @() {
// 			Mk:dialog(null `{result}{Str:lf}#1日1回お寿司食べるかなチャレンジ`)
// 		}
// 	})
// ])

// UIを表示
Ui:render([
	Ui:C:container({
		align: 'center'
		children: [
			Ui:C:mfm(result)
			Ui:C:postFormButton({
				text: "投稿する"
				rounded: true
				primary: true
				form: result
			})
		]
	})
])