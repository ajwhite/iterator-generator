export default function* iterator (list) {
  var index = 0;
  while (index < list.length) {
    yield list[index++];
  }
}
