import emojisList from './emojisList.json'

export default function filterEmojis(searchedText, maxResults) {

  return emojisList.filter( emojis => {

    if(emojis.title.toLowerCase().includes(searchedText.toLowerCase())) {

      return true
    }

    if(emojis.keywords.includes(searchedText)) {

      return true
    }

    return false

  }).slice(0, maxResults)
}