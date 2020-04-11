import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["body", "add", "show"]

  addBody() {
    let content = this.bodyTarget.value;
    this.addTarget.insertAdjacentHTML('beforebegin', "<li>" + content + "</li>");
  }
}
