window.showEmojis = function (header, body, onselect) {
  header.innerHTML = ''
  window.emojis.EmojiDataArray.forEach((emojiCategory, index) => {
    var div = document.createElement('div');
    div.innerText = emojiCategory.cover;
    div.onclick = () => {
      body.innerHTML = '';
      var close = document.createElement('div');
      // close.classList.add('close');
      // close.onclick = () => {
      //   alert('hello=');
      //   document.querySelector('.emojis').classList.add('hide');
      // }
      // body.appendChild(close);
      emojiCategory.CVCategoryData.Data.split(',').forEach((emoji) => {
        var span = document.createElement('span');
        span.innerText = emoji;
        span.className = 'emoji';
        span.onclick = () => {
          onselect(emoji);
        }
        body.appendChild(span);
      })
    }
    if (index === 0) div.onclick();
    header.appendChild(div);
  })
  document.querySelector('.emojis-close').onclick=()=>{
      document.querySelector('.emojis').classList.add('hide');
      document.querySelector(MSG_INPUT_SELECTOR).focus();
  }
}
window.onload = function(){
  document.querySelector('button.open-emoji').onclick();
}
window.emojis = {
  "EmojiDataArray": [
    {
      "CVDataTitle": "EmojiCategory-People",
      "CVCategoryImage": "Emoji-HumanImage",
      "cover": "😀",
      "CVCategoryData": {
        "CVSkipNullGlyphs": false,
        "Data": "😀,😃,😄,😁,😆,😅,😂,🤣,😊,😇,🙂,🙃,😉,😌,😍,😘,😗,😙,😚,😋,😜,😝,😛,🤑,🤗,🤓,😎,🤡,🤠,😏,😒,😞,😔,😟,😕,🙁,☹️,😣,😖,😫,😩,😤,😠,😡,😶,😐,😑,😯,😦,😧,😮,😲,😵,😳,😱,😨,😰,😢,😥,🤤,😭,😓,😪,😴,🙄,🤔,🤥,😬,🤐,🤢,🤧,😷,🤒,🤕,😈,👿,👹,👺,💩,👻,💀,☠️,👽,👾,🤖,🎃,😺,😸,😹,😻,😼,😽,🙀,😿,😾,👐,🙌,👏,🙏,🤝,👍,👎,👊,✊,🤛,🤜,🤞,✌️,🤘,👌,👈,👉,👆,👇,☝️,✋,🤚,🖐,🖖,👋,🤙,💪,🖕,✍️,🤳,💅,💍,💄,💋,👄,👅,👂,👃,👣,👁,👀,🗣,👤,👥,👶,👦,👧,👨,👩,👱,👱,👴,👵,👲,👳,👳,👮,👮,👷,👷,💂,💂,🕵,🤶,🎅,👸,🤴,👰,🤵,👼,🤰,🙇,🙇,💁,🙅,🙆,🙋,🤦,🤷,🙎,🙍,💇,💆,🕴,💃,🕺,👯,🚶,🚶,🏃,🏃,👫,👭,👬,💑,👩‍❤️‍👩,👨‍❤️‍👨,💏,👩‍❤️‍💋‍👩,👨‍❤️‍💋‍👨,👪,👨‍👩‍👧,👨‍👩‍👧‍👦,👨‍👩‍👦‍👦,👨‍👩‍👧‍👧,👩‍👩‍👦,👩‍👩‍👧,👩‍👩‍👧‍👦,👩‍👩‍👦‍👦,👩‍👩‍👧‍👧,👨‍👨‍👦,👨‍👨‍👧,👨‍👨‍👧‍👦,👨‍👨‍👦‍👦,👨‍👨‍👧‍👧,👩‍👦,👩‍👧,👩‍👧‍👦,👩‍👦‍👦,👩‍👧‍👧,👨‍👦,👨‍👧,👨‍👧‍👦,👨‍👦‍👦,👨‍👧‍👧,👚,👕,👖,👔,👗,👙,👘,👠,👡,👢,👞,👟,👒,🎩,🎓,👑,⛑,🎒,👝,👛,👜,💼,👓,🕶,🌂,☂️"
      }
    },
    {
      "CVDataTitle": "EmojiCategory-Nature",
      "CVCategoryImage": "Emoji-NatureImage",
      "cover": "🐶",
      "CVCategoryData": {
        "CVSkipNullGlyphs": false,
        "Data": "🐶,🐱,🐭,🐹,🐰,🦊,🐻,🐼,🐨,🐯,🦁,🐮,🐷,🐽,🐸,🐵,🙈,🙉,🙊,🐒,🐔,🐧,🐦,🐤,🐣,🐥,🦆,🦅,🦉,🦇,🐺,🐗,🐴,🦄,🐝,🐛,🦋,🐌,🐚,🐞,🐜,🕷,🕸,🐢,🐍,🦎,🦂,🦀,🦑,🐙,🦐,🐠,🐟,🐡,🐬,🦈,🐳,🐋,🐊,🐆,🐅,🐃,🐂,🐄,🦌,🐪,🐫,🐘,🦏,🦍,🐎,🐖,🐐,🐏,🐑,🐕,🐩,🐈,🐓,🦃,🕊,🐇,🐁,🐀,🐿,🐾,🐉,🐲,🌵,🎄,🌲,🌳,🌴,🌱,🌿,☘️,🍀,🎍,🎋,🍃,🍂,🍁,🍄,🌾,💐,🌷,🌹,🥀,🌻,🌼,🌸,🌺,🌎,🌍,🌏,🌕,🌖,🌗,🌘,🌑,🌒,🌓,🌔,🌚,🌝,🌞,🌛,🌜,🌙,💫,⭐️,🌟,✨,⚡️,🔥,💥,☄️,☀️,🌤,⛅️,🌥,🌦,🌈,☁️,🌧,⛈,🌩,🌨,☃️,⛄️,❄️,🌬,💨,🌪,🌫,🌊,💧,💦,☔️"
      }
    },
    {
      "CVDataTitle": "EmojiCategory-Foods",
      "CVCategoryImage": "Emoji-FoodsImage",
      "cover": "🍏",
      "CVCategoryData": {
        "CVSkipNullGlyphs": false,
        "Data": "🍏,🍎,🍐,🍊,🍋,🍌,🍉,🍇,🍓,🍈,🍒,🍑,🍍,🥝,🥑,🍅,🍆,🥒,🥕,🌽,🌶,🥔,🍠,🌰,🥜,🍯,🥐,🍞,🥖,🧀,🥚,🍳,🥓,🥞,🍤,🍗,🍖,🍕,🌭,🍔,🍟,🥙,🌮,🌯,🥗,🥘,🍝,🍜,🍲,🍥,🍣,🍱,🍛,🍚,🍙,🍘,🍢,🍡,🍧,🍨,🍦,🍰,🎂,🍮,🍭,🍬,🍫,🍿,🍩,🍪,🥛,🍼,☕️,🍵,🍶,🍺,🍻,🥂,🍷,🥃,🍸,🍹,🍾,🥄,🍴,🍽"
      }
    },
    {
      "CVDataTitle": "EmojiCategory-Activity",
      "CVCategoryImage": "Emoji-ActivityImage",
      "cover": "⚽",
      "CVCategoryData": {
        "CVSkipNullGlyphs": false,
        "Data": "⚽️,🏀,🏈,⚾️,🎾,🏐,🏉,🎱,🏓,🏸,🥅,🏒,🏑,🏏,⛳️,🏹,🎣,🥊,🥋,⛸,🎿,⛷,🏂,🏋️,🏋️,🤺,🤼,🤸,⛹️,⛹️,🤾,🏌️,🏌️,🏄,🏄,🏊,🏊,🤽,🚣,🚣,🏇,🚴,🚴,🚵,🚵,🎽,🏅,🎖,🥇,🥈,🥉,🏆,🏵,🎗,🎫,🎟,🎪,🤹,🎭,🎨,🎬,🎤,🎧,🎼,🎹,🥁,🎷,🎺,🎸,🎻,🎲,🎯,🎳,🎮,🎰"
      }
    },
    {
      "CVDataTitle": "EmojiCategory-Places",
      "CVCategoryImage": "Emoji-PlacesImage",
      "cover": "🚗",
      "CVCategoryData": {
        "CVSkipNullGlyphs": false,
        "Data": "🚗,🚕,🚙,🚌,🚎,🏎,🚓,🚑,🚒,🚐,🚚,🚛,🚜,🛴,🚲,🛵,🏍,🚨,🚔,🚍,🚘,🚖,🚡,🚠,🚟,🚃,🚋,🚞,🚝,🚄,🚅,🚈,🚂,🚆,🚇,🚊,🚉,🚁,🛩,✈️,🛫,🛬,🚀,🛰,💺,🛶,⛵️,🛥,🚤,🛳,⛴,🚢,⚓️,🚧,⛽️,🚏,🚦,🚥,🗺,🗿,🗽,⛲️,🗼,🏰,🏯,🏟,🎡,🎢,🎠,⛱,🏖,🏝,⛰,🏔,🗻,🌋,🏜,🏕,⛺️,🛤,🛣,🏗,🏭,🏠,🏡,🏘,🏚,🏢,🏬,🏣,🏤,🏥,🏦,🏨,🏪,🏫,🏩,💒,🏛,⛪️,🕌,🕍,🕋,⛩,🗾,🎑,🏞,🌅,🌄,🌠,🎇,🎆,🌇,🌆,🏙,🌃,🌌,🌉,🌁"
      }
    },
    {
      "CVDataTitle": "EmojiCategory-Objects",
      "CVCategoryImage": "Emoji-ObjectsImage",
      "cover": "⌚",
      "CVCategoryData": {
        "CVSkipNullGlyphs": false,
        "Data": "⌚️,📱,📲,💻,⌨️,🖥,🖨,🖱,🖲,🕹,🗜,💽,💾,💿,📀,📼,📷,📸,📹,🎥,📽,🎞,📞,☎️,📟,📠,📺,📻,🎙,🎚,🎛,⏱,⏲,⏰,🕰,⌛️,⏳,📡,🔋,🔌,💡,🔦,🕯,🗑,🛢,💸,💵,💴,💶,💷,💰,💳,💎,⚖️,🔧,🔨,⚒,🛠,⛏,🔩,⚙️,⛓,🔫,💣,🔪,🗡,⚔️,🛡,🚬,⚰️,⚱️,🏺,🔮,📿,💈,⚗️,🔭,🔬,🕳,💊,💉,🌡,🚽,🚰,🚿,🛁,🛀,🛎,🔑,🗝,🚪,🛋,🛏,🛌,🖼,🛍,🛒,🎁,🎈,🎏,🎀,🎊,🎉,🎎,🏮,🎐,✉️,📩,📨,📧,💌,📥,📤,📦,🏷,📪,📫,📬,📭,📮,📯,📜,📃,📄,📑,📊,📈,📉,🗒,🗓,📆,📅,📇,🗃,🗳,🗄,📋,📁,📂,🗂,🗞,📰,📓,📔,📒,📕,📗,📘,📙,📚,📖,🔖,🔗,📎,🖇,📐,📏,📌,📍,✂️,🖊,🖋,✒️,🖌,🖍,📝,✏️,🔍,🔎,🔏,🔐,🔒,🔓"
      }
    },
    {
      "CVDataTitle": "EmojiCategory-Symbols",
      "CVCategoryImage": "Emoji-SymbolImage",
      "cover": "💛",
      "CVCategoryData": {
        "CVSkipNullGlyphs": false,
        "Data": "❤️,💛,💚,💙,💜,🖤,💔,❣️,💕,💞,💓,💗,💖,💘,💝,💟,☮️,✝️,☪️,🕉,☸️,✡️,🔯,🕎,☯️,☦️,🛐,⛎,♈️,♉️,♊️,♋️,♌️,♍️,♎️,♏️,♐️,♑️,♒️,♓️,🆔,⚛️,🉑,☢️,☣️,📴,📳,🈶,🈚️,🈸,🈺,🈷️,✴️,🆚,💮,🉐,㊙️,㊗️,🈴,🈵,🈹,🈲,🅰️,🅱️,🆎,🆑,🅾️,🆘,❌,⭕️,🛑,⛔️,📛,🚫,💯,💢,♨️,🚷,🚯,🚳,🚱,🔞,📵,🚭,❗️,❕,❓,❔,‼️,⁉️,🔅,🔆,〽️,⚠️,🚸,🔱,⚜️,🔰,♻️,✅,🈯️,💹,❇️,✳️,❎,🌐,💠,Ⓜ️,🌀,💤,🏧,🚾,♿️,🅿️,🈳,🈂️,🛂,🛃,🛄,🛅,🚹,🚺,🚼,🚻,🚮,🎦,📶,🈁,🔣,ℹ️,🔤,🔡,🔠,🆖,🆗,🆙,🆒,🆕,🆓,0️⃣,1️⃣,2️⃣,3️⃣,4️⃣,5️⃣,6️⃣,7️⃣,8️⃣,9️⃣,🔟,🔢,#️⃣,*️⃣,▶️,⏸,⏯,⏹,⏺,⏭,⏮,⏩,⏪,⏫,⏬,◀️,🔼,🔽,➡️,⬅️,⬆️,⬇️,↗️,↘️,↙️,↖️,↕️,↔️,↪️,↩️,⤴️,⤵️,🔀,🔁,🔂,🔄,🔃,🎵,🎶,➕,➖,➗,✖️,💲,💱,™️,©️,®️,〰️,➰,➿,🔚,🔙,🔛,🔝,🔜,✔️,☑️,🔘,⚪️,⚫️,🔴,🔵,🔺,🔻,🔸,🔹,🔶,🔷,🔳,🔲,▪️,▫️,◾️,◽️,◼️,◻️,⬛️,⬜️,🔈,🔇,🔉,🔊,🔔,🔕,📣,📢,👁‍🗨,💬,💭,🗯,♠️,♣️,♥️,♦️,🃏,🎴,🀄️,🕐,🕑,🕒,🕓,🕔,🕕,🕖,🕗,🕘,🕙,🕚,🕛,🕜,🕝,🕞,🕟,🕠,🕡,🕢,🕣,🕤,🕥,🕦,🕧"
      }
    },
    {
      "CVDataTitle": "EmojiCategory-Flags",
      "CVCategoryImage": "Emoji-FlagsImage",
      "cover": "🏁",
      "CVCategoryData": {
        "CVSkipNullGlyphs": false,
        "Data": "🏳️,🏴,🏁,🚩,🏳️‍🌈,🇦🇫,🇦🇽,🇦🇱,🇩🇿,🇦🇸,🇦🇩,🇦🇴,🇦🇮,🇦🇶,🇦🇬,🇦🇷,🇦🇲,🇦🇼,🇦🇺,🇦🇹,🇦🇿,🇧🇸,🇧🇭,🇧🇩,🇧🇧,🇧🇾,🇧🇪,🇧🇿,🇧🇯,🇧🇲,🇧🇹,🇧🇴,🇧🇶,🇧🇦,🇧🇼,🇧🇷,🇮🇴,🇻🇬,🇧🇳,🇧🇬,🇧🇫,🇧🇮,🇨🇻,🇰🇭,🇨🇲,🇨🇦,🇮🇨,🇰🇾,🇨🇫,🇹🇩,🇨🇱,🇨🇳,🇨🇽,🇨🇨,🇨🇴,🇰🇲,🇨🇬,🇨🇩,🇨🇰,🇨🇷,🇨🇮,🇭🇷,🇨🇺,🇨🇼,🇨🇾,🇨🇿,🇩🇰,🇩🇯,🇩🇲,🇩🇴,🇪🇨,🇪🇬,🇸🇻,🇬🇶,🇪🇷,🇪🇪,🇪🇹,🇪🇺,🇫🇰,🇫🇴,🇫🇯,🇫🇮,🇫🇷,🇬🇫,🇵🇫,🇹🇫,🇬🇦,🇬🇲,🇬🇪,🇩🇪,🇬🇭,🇬🇮,🇬🇷,🇬🇱,🇬🇩,🇬🇵,🇬🇺,🇬🇹,🇬🇬,🇬🇳,🇬🇼,🇬🇾,🇭🇹,🇭🇳,🇭🇰,🇭🇺,🇮🇸,🇮🇳,🇮🇩,🇮🇷,🇮🇶,🇮🇪,🇮🇲,🇮🇱,🇮🇹,🇯🇲,🇯🇵,🎌,🇯🇪,🇯🇴,🇰🇿,🇰🇪,🇰🇮,🇽🇰,🇰🇼,🇰🇬,🇱🇦,🇱🇻,🇱🇧,🇱🇸,🇱🇷,🇱🇾,🇱🇮,🇱🇹,🇱🇺,🇲🇴,🇲🇰,🇲🇬,🇲🇼,🇲🇾,🇲🇻,🇲🇱,🇲🇹,🇲🇭,🇲🇶,🇲🇷,🇲🇺,🇾🇹,🇲🇽,🇫🇲,🇲🇩,🇲🇨,🇲🇳,🇲🇪,🇲🇸,🇲🇦,🇲🇿,🇲🇲,🇳🇦,🇳🇷,🇳🇵,🇳🇱,🇳🇨,🇳🇿,🇳🇮,🇳🇪,🇳🇬,🇳🇺,🇳🇫,🇲🇵,🇰🇵,🇳🇴,🇴🇲,🇵🇰,🇵🇼,🇵🇸,🇵🇦,🇵🇬,🇵🇾,🇵🇪,🇵🇭,🇵🇳,🇵🇱,🇵🇹,🇵🇷,🇶🇦,🇷🇪,🇷🇴,🇷🇺,🇷🇼,🇧🇱,🇸🇭,🇰🇳,🇱🇨,🇵🇲,🇻🇨,🇼🇸,🇸🇲,🇸🇹,🇸🇦,🇸🇳,🇷🇸,🇸🇨,🇸🇱,🇸🇬,🇸🇽,🇸🇰,🇸🇮,🇸🇧,🇸🇴,🇿🇦,🇬🇸,🇰🇷,🇸🇸,🇪🇸,🇱🇰,🇸🇩,🇸🇷,🇸🇿,🇸🇪,🇨🇭,🇸🇾,🇹🇼,🇹🇯,🇹🇿,🇹🇭,🇹🇱,🇹🇬,🇹🇰,🇹🇴,🇹🇹,🇹🇳,🇹🇷,🇹🇲,🇹🇨,🇹🇻,🇺🇬,🇺🇦,🇦🇪,🇬🇧,🇺🇸,🇻🇮,🇺🇾,🇺🇿,🇻🇺,🇻🇦,🇻🇪,🇻🇳,🇼🇫,🇪🇭,🇾🇪,🇿🇲,🇿🇼"
      }
    }
  ],
  "CVViewFontList": [
    "AppleColorEmoji"
  ]
}