/// @ 0.12.4

### {
    name: "文字を大きくする"
    version: "0.1.0"
    author: "KL"
    description: "入力文字を大きく表示します"
  }
  
  @enlarge_text(t) {
    return `$[x2 {t}]`
  }
  
  Plugin:register_post_form_action("文字を大きくする！" @(f u) {
    u("text", enlarge_text(f.text))
  })