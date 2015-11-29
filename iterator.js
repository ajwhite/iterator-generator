export default function* iterator (list) {
  var index = 0;
  if (Array.isArray(list)) {
    while (index < list.length) {
      yield list[index++];
    }
  }
}
