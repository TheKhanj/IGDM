var renderedEmojis = false;
window.showEmojis = function (header, body, onselect) {
  if (renderedEmojis) return;
  renderedEmojis = true;
  header.innerHTML = ''
  window.emojis.EmojiDataArray.forEach((emojiCategory, index) => {
    var div = document.createElement('div');
    div.innerText = emojiCategory.cover;
    div.onclick = () => {
      body.innerHTML = '';
      var close = document.createElement('div');
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
  document.querySelector('.emojis-close').onclick = window.toggleEmojis;
}

window.toggleEmojis = function () {
  const onEmojiSelected = (emoji) => {
    document.querySelector(MSG_INPUT_SELECTOR).value += emoji;
    document.querySelector(MSG_INPUT_SELECTOR).focus();
  }
  const emojis = document.querySelector('.emojis');
  if (emojis.classList.contains('hide')) {
    window.showEmojis(
      document.querySelector('.emojis-header'),
      document.querySelector('.emojis-body'),
      onEmojiSelected
    )
    document.querySelector('.emojis-close').classList.remove('hide');
  } else {
    document.querySelector('.emojis-close').classList.add('hide');
  }
  emojis.classList.toggle('hide');
  document.querySelector('.app').classList.toggle('blur');
  // alert("toggled Emojis");
  document.querySelector(MSG_INPUT_SELECTOR).focus();
}
window.onload = function () {
  window.toggleEmojis();
  const onEmojiSelected = (emoji) => {
    document.querySelector(MSG_INPUT_SELECTOR).value += emoji;
    document.querySelector(MSG_INPUT_SELECTOR).focus();
  }
  var mouseEnter = false;
  var timeout;
  // document.querySelector('.open-emoji').onpointerover = function () {
  //   mouseEnter = true;
  //   const emojis = document.querySelector('.emojis');
  //   if (emojis.classList.contains('hide')) {
  //     window.toggleEmojis();
  //   }
  //   clearTimeout(timeout);
  // }
  // document.querySelector('.open-emoji').onpointerleave = function () {
  //   mouseEnter = false;
  //   timeout = setTimeout(() => {
  //     // alert('etst');
  //     if (!mouseEnter) {
  //       const emojis = document.querySelector('.emojis');
  //       if (!emojis.classList.contains('hide')) {
  //         window.toggleEmojis();
  //       }
  //     }
  //   }, 700);

  // }

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