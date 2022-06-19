/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dom = [".com", ".net", ".es"];

  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var y = 0; y < noun.length; y++) {
        for (var x = 0; x < dom.length; x++) {
          console.log(pronoun[i] + adj[j] + noun[y] + dom[x]);
        }
      }
    }
  }
};
