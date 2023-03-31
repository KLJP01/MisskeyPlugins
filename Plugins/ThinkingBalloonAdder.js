/// @ 0.12.4

### {
    name: "考え中バルーンを追加"
    version: "0.1.0"
    author: "KL"
    description: "入力文字の最初と最後に考え中バルーンを追加します"
  }
  
  @add_thinking_balloon(t) {
    var left_balloon = ":meow_hungry::left_side_thinking_balloon_with_tail:"
    var right_balloon = ":right_side_thinking_balloon_without_tail:"
    return `{left_balloon}{t}{right_balloon}`
    }
  
  
  Plugin:register_post_form_action("考え中バルーンを追加！" @(f u) {
    u("text", add_thinking_balloon(f.text))
  })  