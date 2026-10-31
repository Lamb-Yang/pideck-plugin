// 会话分组 — 首帧主题引导（theme-boot）
// 问题：styles.css 的 :root 默认是暗色兜底，data-theme 要等 app.js 异步拿到
// context 才设置，首帧会先按黑底画一帧再被纠正（亮色主题下表现为"闪黑"）。
// 做法：本脚本在 head 内同步执行（先于首帧），从 sessionStorage 恢复上次
// 记录的主题与宿主配色 token；首次打开（无记录）退回跟随系统亮暗偏好。
// app.js 在 applyContext 时负责写回这份记忆。
// 普通同步脚本（非 module）；全程 try/catch，任何失败都静默退出，交给
// styles.css 的纯 CSS 兜底（@media prefers-color-scheme :root:not([data-theme])）。
(function () {
	"use strict";
	var THEME_KEY = "sg.boot.theme";
	var TOKENS_KEY = "sg.boot.tokens";
	try {
		var root = document.documentElement;
		var raw = sessionStorage.getItem(TOKENS_KEY);
		if (raw) {
			var tokens = JSON.parse(raw);
			if (tokens && typeof tokens === "object") {
				for (var name in tokens) {
					if (Object.prototype.hasOwnProperty.call(tokens, name) && typeof tokens[name] === "string" && tokens[name]) {
						root.style.setProperty(name, tokens[name]);
					}
				}
			}
		}
		var theme = sessionStorage.getItem(THEME_KEY);
		if (theme !== "light" && theme !== "dark") {
			var preferLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
			theme = preferLight ? "light" : "dark";
		}
		root.dataset.theme = theme;
	} catch (err) {
		/* sessionStorage 不可用等极端情况：不设 data-theme，交给 CSS 兜底 */
	}
})();
