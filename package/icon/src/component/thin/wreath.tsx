
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wreath` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wreath?s=thin wreath}
 * @preview ![wreath](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTAuMjUgMzg1LjE0OEwyMjQgNDA3LjY0OEwxNTcuODEyIDM4NS4xNDhDMTUwLjgxMiAzODIuODY3IDE0My4wNjIgMzg0LjE0OCAxMzcuMTA5IDM4OC40NjFDMTMxLjMxMiAzOTIuNjggMTI4IDM5OS4xMTcgMTI4IDQwNi4wODZWNDg5Ljk5OEMxMjggNDk2LjkwNCAxMzEuMjgxIDUwMy4yNzkgMTM2Ljk4NCA1MDcuNDY5QzE0Mi44OTEgNTExLjgxMiAxNTAuNjI1IDUxMy4wNjIgMTU3LjkyMiA1MTAuODc1TDIyNCA0ODguNDk4TDI5MC4xODggNTEwLjkwNkMyOTIuNSA1MTEuNjU2IDI5NC44OTEgNTEyIDI5Ny4yNjYgNTEyQzMwMi4xMDkgNTEyIDMwNi45MDYgNTEwLjUgMzEwLjkwNiA1MDcuNTk0QzMxNi42ODggNTAzLjM3MyAzMjAgNDk2Ljk2NyAzMjAgNDg5Ljk5OFY0MDYuMDg2QzMyMCAzOTkuMTQ4IDMxNi43MTkgMzkyLjc3MyAzMTEgMzg4LjU4NkMzMDUuMDc4IDM4NC4yMTEgMjk3LjM3NSAzODIuODk4IDI5MC4yNSAzODUuMTQ4Wk0zMDQgNDg5Ljk5OEMzMDQgNDkyLjUyOSAzMDIuMjUgNDk0LjA5MiAzMDEuNDg0IDQ5NC42NTRDMjk5LjYyNSA0OTUuOTk4IDI5Ny4zMTIgNDk2LjQzNiAyOTUuMjAzIDQ5NS42ODZMMjI0IDQ3MS42MjFMMTUyLjk2OSA0OTUuNjU0QzE1MC43OTcgNDk2LjMxMSAxNDguMzI4IDQ5NS45NjcgMTQ2LjQ1MyA0OTQuNTkyQzE0NS41NDcgNDkzLjkwNCAxNDQgNDkyLjQwNCAxNDQgNDg5Ljk5OFY0MDYuMDg2QzE0NCA0MDMuNjE3IDE0NS41NzggNDAyLjA4NiAxNDYuNTE2IDQwMS4zOThDMTQ4LjM3NSA0MDAuMDU1IDE1MC43MDMgMzk5LjYxNyAxNTIuNzgxIDQwMC4zMzZMMjI0IDQyNC41MjVMMjk1LjEwOSA0MDAuMzk4QzI5Ny4yOTcgMzk5LjcxMSAyOTkuNzM0IDQwMC4xNDggMzAxLjUzMSA0MDEuNDYxQzMwMi40NTMgNDAyLjE0OCAzMDQgNDAzLjY0OCAzMDQgNDA2LjA4NlY0ODkuOTk4Wk00NDggMjIzLjk4MkM0NDggMjA4LjE5OSA0NDEuMTU2IDE5My40MTggNDI5LjM5MSAxODMuMTA0QzQzNi4zNDQgMTY5LjE5NyA0MzYuOTY5IDE1Mi44ODUgNDMwLjg3NSAxMzguMTk1QzQyNC42ODcgMTIzLjQxNCA0MTIuNDUzIDExMi4zMTggMzk3LjM0NCAxMDcuNDQzQzM5OC41NDcgOTEuNjYyIDM5My4yMDMgNzYuNDQxIDM4Mi4zNzUgNjUuNjI5QzM3MS41MzEgNTQuNzUyIDM1Ni4zMjggNDkuNTAyIDM0MC41NDcgNTAuNjU4QzMzNS42NTYgMzUuNDM5IDMyNC41NDcgMjMuMTg4IDMwOS43NjYgMTcuMTI1QzI5NS4zMjggMTEuMDk0IDI3OS4wMzEgMTEuNzE5IDI2NC45MDYgMTguNjU2QzI1NC42MDkgNi44NDQgMjM5Ljc5NyAwIDIyNCAwQzIwOC4yMTkgMCAxOTMuNDA2IDYuODQ0IDE4My4xMDkgMTguNjI1QzE2OS4xNDEgMTEuNjU2IDE1Mi44MjggMTEuMDMxIDEzOC4yMDMgMTcuMTI1QzEyMy4zNzUgMjMuMzc1IDExMi4zMTMgMzUuNjI3IDEwNy41MzEgNTAuNjU4QzkxLjcxOSA0OS4yMjEgNzYuNTYyIDU0Ljc4MyA2NS43ODEgNjUuNTk4QzU0LjgyOCA3Ni40MSA0OS40MzggOTEuNjYyIDUwLjczNCAxMDcuNDQzQzM1LjUzMSAxMTIuMzE4IDIzLjMxMiAxMjMuNDE0IDE3LjI2NiAxMzguMTk1QzExLjE4OCAxNTIuNjY2IDExLjgxMiAxNjguOTQ3IDE4Ljc2NiAxODMuMDQxQzYuOTA2IDE5My4zMjQgMCAyMDguMTM3IDAgMjIzLjk4MkMwIDIzOS43MzIgNi44NDQgMjU0LjUxNiAxOC42MDkgMjY0Ljg1OUMxMS42NTYgMjc4Ljc2NiAxMS4wMzEgMjk1LjA0OSAxNy4xNDEgMzA5LjczNkMyMy4yODEgMzI0LjMzMiAzNS41MzEgMzM1LjMwMSA1MC43MDMgMzQwLjE0NUM0OS4yOTcgMzU2LjI0IDU0LjU5NCAzNzEuMzAzIDY1LjcwMyAzODIuMzA1Qzc0LjcwMyAzOTEuNDMgODYuNzUgMzk2Ljc0MiAxMDAuNTE2IDM5Ny42NDhDMTAwLjcwMyAzOTcuNjggMTAwLjg3NSAzOTcuNjggMTAxLjA2MiAzOTcuNjhDMTA1LjIzNCAzOTcuNjggMTA4Ljc1IDM5NC40MyAxMDkuMDMxIDM5MC4yMTFDMTA5LjMyOCAzODUuODA1IDEwNS45ODQgMzgxLjk5MiAxMDEuNTc4IDM4MS43MTFDOTQuNzUgMzgxLjI0MiA4NC45NTMgMzc5LjAyMyA3Ny4wMzEgMzcwLjk5QzY4LjA2MiAzNjIuMTE1IDY0LjU5NCAzNDkuMzAzIDY3LjUxNiAzMzUuODMyQzY3Ljk4NCAzMzMuNzA3IDY3LjU2MiAzMzEuNDg4IDY2LjM0NCAzMjkuNjc2UzYzLjIxOSAzMjYuNjQ1IDYxLjA3OCAzMjYuMjdDNDcuNjI1IDMyMy45MjYgMzYuOTg0IDMxNS42NDUgMzEuOTA2IDMwMy41OEMyNi45MDYgMjkxLjU0OSAyOC4zMTIgMjc4LjAxNiAzNS42NzIgMjY3LjMyOEMzNi45MDYgMjY1LjU3OCAzNy4zNTkgMjYzLjM5MSAzNi45NTMgMjYxLjI2NkMzNi41MzEgMjU5LjE3MiAzNS4yOTcgMjU3LjI5NyAzMy41IDI1Ni4xMDlDMjIuNTQ3IDI0OC44OTEgMTYgMjM2Ljg4OSAxNiAyMjMuOTgyQzE2IDIxMS4wNDMgMjIuNTc4IDE5OS4wNDMgMzMuNTc4IDE5MS44ODdDMzUuMzc1IDE5MC42OTkgMzYuNjI1IDE4OC44NTUgMzcuMDYyIDE4Ni43NjJDMzcuNDg0IDE4NC42NjggMzcuMDQ3IDE4Mi40NzkgMzUuODU5IDE4MC42OTdDMjguNDg0IDE2OS43NiAyNy4wNjMgMTU2LjE5NyAzMi4wNDcgMTQ0LjMyQzM3IDEzMi4yMjcgNDcuODQ0IDEyMy42MzMgNjEuMDc4IDEyMS4zMkM2My4yMTkgMTIwLjk0NSA2NS4xMjUgMTE5LjcyNSA2Ni4zNDQgMTE3LjkxMlM2Ny45ODQgMTEzLjg1IDY3LjUxNiAxMTEuNzI1QzY0LjYwOSA5OC40NzUgNjguMDc4IDg1LjgxNiA3Ny4wNjIgNzYuOTQxQzg1LjkzOCA2OC4wNjYgOTguNjg4IDY0LjcyMyAxMTEuOTIyIDY3LjQxQzExNC4wNzggNjcuODc5IDExNi4yOTcgNjcuNDQxIDExOC4wOTQgNjYuMjIzQzExOS45MDYgNjQuOTczIDEyMS4xMjUgNjMuMDY2IDEyMS40ODQgNjAuOTFDMTIzLjY1NiA0Ny44NzcgMTMyLjIzNCAzNy4wMDIgMTQ0LjM5MSAzMS44NzdDMTU2LjI5NyAyNi44NzcgMTY5Ljg5MSAyOC4zMTQgMTgwLjY3MiAzNS42ODlDMTgyLjQzOCAzNi45MzkgMTg0LjY0MSAzNy4yODMgMTg2LjczNCAzNi45MzlDMTg4Ljg0NCAzNi41MzMgMTkwLjcwMyAzNS4yODMgMTkxLjg3NSAzMy41MDJDMTk5LjA2MiAyMi41MzEgMjExLjA3OCAxNiAyMjQgMTZTMjQ4LjkzOCAyMi41MzEgMjU2LjEyNSAzMy41MDJDMjU3LjI5NyAzNS4yODMgMjU5LjE0MSAzNi41MDIgMjYxLjIzNCAzNi45MzlDMjYzLjM0NCAzNy4zNDYgMjY1LjUxNiAzNi45MzkgMjY3LjI4MSAzNS43MjFDMjc4LjE4NyAyOC40MDggMjkxLjc5NyAyNi45MDggMzAzLjY1NiAzMS45MDhDMzE1LjczNCAzNi44NDYgMzI0LjMyOCA0Ny43MjEgMzI2LjY1NiA2MC45NzNDMzI3LjAzMSA2My4xMjkgMzI4LjI1IDY1LjAwNCAzMzAuMDYyIDY2LjIyM0MzMzEuODU5IDY3LjQ0MSAzMzQuMDc4IDY3Ljg0OCAzMzYuMjAzIDY3LjQxQzM0OS4zNTkgNjQuNTk4IDM2Mi4zMTIgNjguMTkxIDM3MS4wNjIgNzYuOTQxQzM3OS45MjIgODUuNzg1IDM4My4zOTEgOTguNTA2IDM4MC41NzggMTExLjc4N0MzODAuMTI1IDExMy45MTIgMzgwLjU2MiAxMTYuMTMxIDM4MS43ODEgMTE3LjkxMkMzODMgMTE5LjcyNSAzODQuODkxIDEyMC45NDUgMzg3LjAzMSAxMjEuMzJDNDAwLjE3MiAxMjMuNjMzIDQxMS4wMzEgMTMyLjIyNyA0MTYuMDk0IDE0NC4zNTJDNDIxLjA5NCAxNTYuMzg1IDQxOS42ODggMTY5Ljk0NyA0MTIuMzI4IDE4MC42MzVDNDExLjA5NCAxODIuMzg1IDQxMC42NDEgMTg0LjU3NCA0MTEuMDQ3IDE4Ni42OTlDNDExLjQ2OSAxODguODI0IDQxMi43MTkgMTkwLjY2OCA0MTQuNTE2IDE5MS44NTVDNDI1LjQ2OSAxOTkuMDQzIDQzMiAyMTEuMDQzIDQzMiAyMjMuOTgyQzQzMiAyMzYuODg5IDQyNS41NDcgMjQ4LjgyOCA0MTQuNzE5IDI1NS45ODRDNDEyLjkzNyAyNTcuMTcyIDQxMS42ODcgMjU5LjA0NyA0MTEuMjgxIDI2MS4xNDFDNDEwLjg3NSAyNjMuMjY2IDQxMS4zNDQgMjY1LjQ1MyA0MTIuNTYyIDI2Ny4yMDNDNDE5Ljk2OSAyNzcuOTUzIDQyMS40MjIgMjkxLjQ4NiA0MTYuNDUzIDMwMy40MjRDNDExLjQyMiAzMTUuNDg4IDQwMC43OTcgMzIzLjc3IDM4Ny4yODEgMzI2LjE0NUMzODUuMTI1IDMyNi41MiAzODMuMjM0IDMyNy43MzggMzgyLjAxNiAzMjkuNTUxUzM4MC4zNzUgMzMzLjU4MiAzODAuODQ0IDMzNS43MDdDMzgzLjc1IDM0OS4xMTUgMzgwLjI4MSAzNjEuOTI4IDM3MS4yOTcgMzcwLjg5NkMzNjMuMTU2IDM3OS4wNTUgMzUzLjQzNyAzODEuMjExIDM0Ni43MzQgMzgxLjU4NkMzNDIuMzEyIDM4MS44NjcgMzM4Ljk1MyAzODUuNjQ4IDMzOS4yMDMgMzkwLjA1NUMzMzkuNDY5IDM5NC40NjEgMzQzLjA5NCAzOTcuNjE3IDM0Ny42NDEgMzk3LjU4NkMzNjEuMjUgMzk2Ljc3MyAzNzMuMzQ0IDM5MS40OTIgMzgyLjYwOSAzODIuMjExQzM5My41NjIgMzcxLjI3MSAzOTguOTIyIDM1NS45MjggMzk3LjYyNSAzNDAuMDUxQzQxMi44NzUgMzM1LjE3NiA0MjUuMTQxIDMyNC4yMDcgNDMxLjIzNCAzMDkuNThDNDM3LjMxMiAyOTQuOTU1IDQzNi42NDEgMjc4LjY3MiA0MjkuNjI1IDI2NC43MDNDNDQxLjI1IDI1NC40NTMgNDQ4IDIzOS43MDEgNDQ4IDIyMy45ODJaTTMxNi4xODggMTkyLjk4QzMxNS4xNTYgMTg5LjY2OCAzMTQuODI4IDE4NS45OCAzMTQuNDM4IDE4Mi4zMjJDMzEzLjcwMyAxNzUuMjkxIDMxMi44NTkgMTY3LjM1NCAzMDguMjgxIDE2MC43MjlDMzAzLjUzMSAxNTMuOTQ3IDI5Ni4yOTcgMTUwLjUzOSAyODkuOTA2IDE0Ny41MDhDMjg2Ljc2NiAxNDYuMDM5IDI4My42MDkgMTQ0LjYwMiAyODEuMDYyIDE0Mi43MjdDMjc4LjY4NyAxNDAuOTE0IDI3Ni4zNDQgMTM4LjE5NSAyNzMuODQ0IDEzNS4zMkMyNjkuMjM0IDEyOS45NzcgMjY0IDEyMy45NDUgMjU2LjI2NiAxMjEuMjg5QzI0OC43ODEgMTE4LjgxOCAyNDEuMTQxIDEyMC40NDUgMjM0LjQwNiAxMjEuODgzQzIyNi45MDYgMTIzLjUwOCAyMjEuMDk0IDEyMy41MDggMjEzLjU5NCAxMjEuODgzQzIwNi44NDQgMTIwLjQ0NSAxOTkuMjM0IDExOC43NTYgMTkxLjY4OCAxMjEuMzJDMTg0IDEyMy45NDUgMTc4Ljc2NiAxMjkuOTc3IDE3NC4xNTYgMTM1LjMyQzE3MS42NTYgMTM4LjE5NSAxNjkuMzEyIDE0MC45MTQgMTY2LjkyMiAxNDIuNzI3QzE2NC41IDE0NC41NyAxNjEuMjY2IDE0Ni4xMDIgMTU3Ljg0NCAxNDcuNjk1QzE1MS41NDcgMTUwLjY2NCAxNDQuNDIyIDE1NC4wMSAxMzkuNjg4IDE2MC43NkMxMzUuMTQxIDE2Ny4zNTQgMTM0LjI5NyAxNzUuMjkxIDEzMy41NjMgMTgyLjMyMkMxMzMuMTcyIDE4NS45OCAxMzIuODQ0IDE4OS42NjggMTMxLjgyOCAxOTIuOTE4QzEzMC44NDQgMTk2LjA0MyAxMjkuMDk0IDE5OS4wNzQgMTI3LjM5MSAyMDIuMTY4QzEyMy45MjIgMjA4LjQxOCAxMjAgMjE1LjU0MyAxMjAgMjI0LjAxNEMxMjAgMjMyLjQ4MiAxMjMuOTIyIDIzOS42MDcgMTI3LjM5MSAyNDUuODU3QzEyOS4wOTQgMjQ4Ljk1MyAxMzAuODQ0IDI1MS45ODQgMTMxLjgxMiAyNTUuMDQ3QzEzMi44NDQgMjU4LjM1OSAxMzMuMTcyIDI2Mi4wNDcgMTMzLjU2MiAyNjUuNzAzQzEzNC4yOTcgMjcyLjczNCAxMzUuMTQxIDI4MC42NzQgMTM5LjcxOSAyODcuMjk5QzE0NC40NjkgMjk0LjA4IDE1MS43MDMgMjk3LjQ4NiAxNTguMDk0IDMwMC41MThDMTYxLjIzNCAzMDEuOTg2IDE2NC4zOTEgMzAzLjQyNCAxNjYuOTM4IDMwNS4yOTlDMTY5LjMxMiAzMDcuMTExIDE3MS42NTYgMzA5LjgzIDE3NC4xNTYgMzEyLjcwN0MxNzguNzY2IDMxOC4wNTEgMTg0IDMyNC4wODIgMTkxLjczNCAzMjYuNzM4QzE5NC41NDcgMzI3LjY3NiAxOTcuMzc1IDMyOC4wMiAyMDAuMTcyIDMyOC4wMkMyMDQuODI4IDMyOC4wMiAyMDkuMzkxIDMyNy4wNTEgMjEzLjU5NCAzMjYuMTQ1QzIyMS4wOTQgMzI0LjUyIDIyNi45MDYgMzI0LjUyIDIzNC40MDYgMzI2LjE0NUMyNDEuMTQxIDMyNy41ODIgMjQ4LjczNCAzMjkuMjcgMjU2LjMxMiAzMjYuNzA3QzI2NCAzMjQuMDgyIDI2OS4yMzQgMzE4LjA1MSAyNzMuODQ0IDMxMi43MDdDMjc2LjM0NCAzMDkuODMgMjc4LjY4OCAzMDcuMTExIDI4MS4wNzggMzA1LjI5OUMyODMuNSAzMDMuNDU1IDI4Ni43MzQgMzAxLjkyNCAyOTAuMTU2IDMwMC4zM0MyOTYuNDUzIDI5Ny4zNjEgMzAzLjU3OCAyOTQuMDE4IDMwOC4zMTIgMjg3LjI2OEMzMTIuODU5IDI4MC42NzQgMzEzLjcwMyAyNzIuNzM0IDMxNC40MzcgMjY1LjcwM0MzMTQuODI4IDI2Mi4wNzggMzE1LjE1NiAyNTguMzkxIDMxNi4xNzIgMjU1LjA3OEMzMTcuMTcyIDI1MS45NTMgMzE4LjkwNiAyNDguOTUzIDMyMC42MDkgMjQ1Ljg1N0MzMjQuMDc4IDIzOS42MDcgMzI4IDIzMi40ODIgMzI4IDIyNC4wMTRDMzI4IDIxNS41NDMgMzI0LjA3OCAyMDguNDE4IDMyMC42MDkgMjAyLjE2OEMzMTguOTA2IDE5OS4wNzQgMzE3LjE1NiAxOTYuMDQzIDMxNi4xODggMTkyLjk4Wk0zMDYuNTk0IDIzOC4xMzlDMzA0LjM3NSAyNDIuMTcgMzAyLjIxOSAyNDYuMTcgMzAwLjkyMiAyNTAuMjM0QzMwMC45MjIgMjUwLjI2NiAzMDAuOTA2IDI1MC4yOTcgMzAwLjkwNiAyNTAuMjk3QzI5OS41IDI1NC44NTkgMjk5IDI1OS41MTYgMjk4LjUzMSAyNjQuMDQ3QzI5Ny45MzggMjY5LjY0MSAyOTcuMzc1IDI3NC45MjIgMjk1LjE4OCAyNzguMTA5QzI5Mi45MjIgMjgxLjM2MSAyODguMjY2IDI4My41MTggMjgzLjM0NCAyODUuODYxQzI3OS4zMjggMjg3LjczNiAyNzUuMTcyIDI4OS43MDUgMjcxLjQwNiAyOTIuNTQ5QzI2Ny42ODggMjk1LjM2MSAyNjQuNjcyIDI5OC44NjEgMjYxLjczNCAzMDIuMjM2QzI1OC4xNDEgMzA2LjQyNCAyNTQuNzM0IDMxMC4zNjEgMjUxLjIwMyAzMTEuNTQ5QzI0Ny44NTkgMzEyLjY3NiAyNDIuOTM3IDMxMS41OCAyMzcuNzgxIDMxMC40ODZDMjI4Ljk2OSAzMDguNjExIDIxOS4wMzEgMzA4LjYxMSAyMTAuMjE5IDMxMC40ODZDMjA1LjA3OCAzMTEuNjExIDIwMC4xODggMzEyLjY0NSAxOTYuODQ0IDMxMS41OEMxOTMuMjY2IDMxMC4zNjEgMTg5Ljg1OSAzMDYuNDI0IDE4Ni4yNjYgMzAyLjIzNkMxODMuMzI4IDI5OC44NjEgMTgwLjMxMiAyOTUuMzYxIDE3Ni41MTYgMjkyLjQ4NkMxNzMuMDk0IDI4OS45NTUgMTY5LjAxNiAyODcuOTg2IDE2NC45MjIgMjg2LjA0OUMxNTkuODkxIDI4My42NzQgMTU1LjE0MSAyODEuNDI0IDE1Mi44NDQgMjc4LjE0MUMxNTAuNjI1IDI3NC45MjIgMTUwLjA2MiAyNjkuNjQxIDE0OS40NjkgMjY0LjA0N0MxNDkgMjU5LjUxNiAxNDguNSAyNTQuODU5IDE0Ny4wNzggMjUwLjIzNEMxNDUuNzgxIDI0Ni4xNyAxNDMuNjI1IDI0Mi4xNyAxNDEuNDA2IDIzOC4xMzlDMTM4LjYyNSAyMzMuMTA3IDEzNiAyMjguMzU3IDEzNiAyMjQuMDE0UzEzOC42MjUgMjE0LjkxOCAxNDEuNDA2IDIwOS44ODdDMTQzLjYyNSAyMDUuODU1IDE0NS43ODEgMjAxLjg1NSAxNDcuMDk0IDE5Ny43M0MxNDguNSAxOTMuMTY4IDE0OSAxODguNTEyIDE0OS40NjkgMTgzLjk3OUMxNTAuMDYyIDE3OC4zODUgMTUwLjYyNSAxNzMuMTA0IDE1Mi44MTIgMTY5LjkxNkMxNTUuMDc4IDE2Ni42NjYgMTU5LjczNCAxNjQuNTEgMTY0LjY1NiAxNjIuMTY2QzE2OC42NzIgMTYwLjI5MSAxNzIuODI4IDE1OC4zMjIgMTc2LjU5NCAxNTUuNDc5QzE4MC4zMTIgMTUyLjY2NiAxODMuMzI4IDE0OS4xNjQgMTg2LjI2NiAxNDUuNzg5QzE4OS44NTkgMTQxLjYwMiAxOTMuMjY2IDEzNy42NjQgMTk2Ljc5NyAxMzYuNDc3QzE5Ny43OTcgMTM2LjEzMyAxOTguOTM4IDEzNi4wMDggMjAwLjE4OCAxMzYuMDA4QzIwMy4xMDkgMTM2LjAwOCAyMDYuNTk0IDEzNi43NTggMjEwLjIxOSAxMzcuNTM5QzIxOS4wMzEgMTM5LjQxNCAyMjguOTY5IDEzOS40MTQgMjM3Ljc4MSAxMzcuNTM5QzI0Mi45NTMgMTM2LjQ0NSAyNDcuODI4IDEzNS40MTQgMjUxLjE1NiAxMzYuNDQ1QzI1NC43MzQgMTM3LjY2NCAyNTguMTQxIDE0MS42MDIgMjYxLjczNCAxNDUuNzg5QzI2NC42NzIgMTQ5LjE2NCAyNjcuNjg4IDE1Mi42NjYgMjcxLjQ4NCAxNTUuNTQxQzI3NC45MDYgMTU4LjA3MiAyNzguOTg0IDE2MC4wNDEgMjgzLjA3OCAxNjEuOTc5QzI4OC4xMDkgMTY0LjM1NCAyOTIuODU5IDE2Ni42MDQgMjk1LjE1NiAxNjkuODg1QzI5Ny4zNzUgMTczLjEwNCAyOTcuOTM4IDE3OC4zODUgMjk4LjUzMSAxODMuOTc5QzI5OSAxODguNTEyIDI5OS41IDE5My4xNjggMzAwLjkyMiAxOTcuNzkzQzMwMi4yMTkgMjAxLjg1NSAzMDQuMzc1IDIwNS44NTUgMzA2LjU5NCAyMDkuODg3QzMwOS4zNzUgMjE0LjkxOCAzMTIgMjE5LjY3IDMxMiAyMjQuMDE0UzMwOS4zNzUgMjMzLjEwNyAzMDYuNTk0IDIzOC4xMzlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Wreath(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M290.25 385.148L224 407.648L157.812 385.148C150.812 382.867 143.062 384.148 137.109 388.461C131.312 392.68 128 399.117 128 406.086V489.998C128 496.904 131.281 503.279 136.984 507.469C142.891 511.812 150.625 513.062 157.922 510.875L224 488.498L290.188 510.906C292.5 511.656 294.891 512 297.266 512C302.109 512 306.906 510.5 310.906 507.594C316.688 503.373 320 496.967 320 489.998V406.086C320 399.148 316.719 392.773 311 388.586C305.078 384.211 297.375 382.898 290.25 385.148ZM304 489.998C304 492.529 302.25 494.092 301.484 494.654C299.625 495.998 297.312 496.436 295.203 495.686L224 471.621L152.969 495.654C150.797 496.311 148.328 495.967 146.453 494.592C145.547 493.904 144 492.404 144 489.998V406.086C144 403.617 145.578 402.086 146.516 401.398C148.375 400.055 150.703 399.617 152.781 400.336L224 424.525L295.109 400.398C297.297 399.711 299.734 400.148 301.531 401.461C302.453 402.148 304 403.648 304 406.086V489.998ZM448 223.982C448 208.199 441.156 193.418 429.391 183.104C436.344 169.197 436.969 152.885 430.875 138.195C424.687 123.414 412.453 112.318 397.344 107.443C398.547 91.662 393.203 76.441 382.375 65.629C371.531 54.752 356.328 49.502 340.547 50.658C335.656 35.439 324.547 23.188 309.766 17.125C295.328 11.094 279.031 11.719 264.906 18.656C254.609 6.844 239.797 0 224 0C208.219 0 193.406 6.844 183.109 18.625C169.141 11.656 152.828 11.031 138.203 17.125C123.375 23.375 112.313 35.627 107.531 50.658C91.719 49.221 76.562 54.783 65.781 65.598C54.828 76.41 49.438 91.662 50.734 107.443C35.531 112.318 23.312 123.414 17.266 138.195C11.188 152.666 11.812 168.947 18.766 183.041C6.906 193.324 0 208.137 0 223.982C0 239.732 6.844 254.516 18.609 264.859C11.656 278.766 11.031 295.049 17.141 309.736C23.281 324.332 35.531 335.301 50.703 340.145C49.297 356.24 54.594 371.303 65.703 382.305C74.703 391.43 86.75 396.742 100.516 397.648C100.703 397.68 100.875 397.68 101.062 397.68C105.234 397.68 108.75 394.43 109.031 390.211C109.328 385.805 105.984 381.992 101.578 381.711C94.75 381.242 84.953 379.023 77.031 370.99C68.062 362.115 64.594 349.303 67.516 335.832C67.984 333.707 67.562 331.488 66.344 329.676S63.219 326.645 61.078 326.27C47.625 323.926 36.984 315.645 31.906 303.58C26.906 291.549 28.312 278.016 35.672 267.328C36.906 265.578 37.359 263.391 36.953 261.266C36.531 259.172 35.297 257.297 33.5 256.109C22.547 248.891 16 236.889 16 223.982C16 211.043 22.578 199.043 33.578 191.887C35.375 190.699 36.625 188.855 37.062 186.762C37.484 184.668 37.047 182.479 35.859 180.697C28.484 169.76 27.063 156.197 32.047 144.32C37 132.227 47.844 123.633 61.078 121.32C63.219 120.945 65.125 119.725 66.344 117.912S67.984 113.85 67.516 111.725C64.609 98.475 68.078 85.816 77.062 76.941C85.938 68.066 98.688 64.723 111.922 67.41C114.078 67.879 116.297 67.441 118.094 66.223C119.906 64.973 121.125 63.066 121.484 60.91C123.656 47.877 132.234 37.002 144.391 31.877C156.297 26.877 169.891 28.314 180.672 35.689C182.438 36.939 184.641 37.283 186.734 36.939C188.844 36.533 190.703 35.283 191.875 33.502C199.062 22.531 211.078 16 224 16S248.938 22.531 256.125 33.502C257.297 35.283 259.141 36.502 261.234 36.939C263.344 37.346 265.516 36.939 267.281 35.721C278.187 28.408 291.797 26.908 303.656 31.908C315.734 36.846 324.328 47.721 326.656 60.973C327.031 63.129 328.25 65.004 330.062 66.223C331.859 67.441 334.078 67.848 336.203 67.41C349.359 64.598 362.312 68.191 371.062 76.941C379.922 85.785 383.391 98.506 380.578 111.787C380.125 113.912 380.562 116.131 381.781 117.912C383 119.725 384.891 120.945 387.031 121.32C400.172 123.633 411.031 132.227 416.094 144.352C421.094 156.385 419.688 169.947 412.328 180.635C411.094 182.385 410.641 184.574 411.047 186.699C411.469 188.824 412.719 190.668 414.516 191.855C425.469 199.043 432 211.043 432 223.982C432 236.889 425.547 248.828 414.719 255.984C412.937 257.172 411.687 259.047 411.281 261.141C410.875 263.266 411.344 265.453 412.562 267.203C419.969 277.953 421.422 291.486 416.453 303.424C411.422 315.488 400.797 323.77 387.281 326.145C385.125 326.52 383.234 327.738 382.016 329.551S380.375 333.582 380.844 335.707C383.75 349.115 380.281 361.928 371.297 370.896C363.156 379.055 353.437 381.211 346.734 381.586C342.312 381.867 338.953 385.648 339.203 390.055C339.469 394.461 343.094 397.617 347.641 397.586C361.25 396.773 373.344 391.492 382.609 382.211C393.562 371.271 398.922 355.928 397.625 340.051C412.875 335.176 425.141 324.207 431.234 309.58C437.312 294.955 436.641 278.672 429.625 264.703C441.25 254.453 448 239.701 448 223.982ZM316.188 192.98C315.156 189.668 314.828 185.98 314.438 182.322C313.703 175.291 312.859 167.354 308.281 160.729C303.531 153.947 296.297 150.539 289.906 147.508C286.766 146.039 283.609 144.602 281.062 142.727C278.687 140.914 276.344 138.195 273.844 135.32C269.234 129.977 264 123.945 256.266 121.289C248.781 118.818 241.141 120.445 234.406 121.883C226.906 123.508 221.094 123.508 213.594 121.883C206.844 120.445 199.234 118.756 191.688 121.32C184 123.945 178.766 129.977 174.156 135.32C171.656 138.195 169.312 140.914 166.922 142.727C164.5 144.57 161.266 146.102 157.844 147.695C151.547 150.664 144.422 154.01 139.688 160.76C135.141 167.354 134.297 175.291 133.563 182.322C133.172 185.98 132.844 189.668 131.828 192.918C130.844 196.043 129.094 199.074 127.391 202.168C123.922 208.418 120 215.543 120 224.014C120 232.482 123.922 239.607 127.391 245.857C129.094 248.953 130.844 251.984 131.812 255.047C132.844 258.359 133.172 262.047 133.562 265.703C134.297 272.734 135.141 280.674 139.719 287.299C144.469 294.08 151.703 297.486 158.094 300.518C161.234 301.986 164.391 303.424 166.938 305.299C169.312 307.111 171.656 309.83 174.156 312.707C178.766 318.051 184 324.082 191.734 326.738C194.547 327.676 197.375 328.02 200.172 328.02C204.828 328.02 209.391 327.051 213.594 326.145C221.094 324.52 226.906 324.52 234.406 326.145C241.141 327.582 248.734 329.27 256.312 326.707C264 324.082 269.234 318.051 273.844 312.707C276.344 309.83 278.688 307.111 281.078 305.299C283.5 303.455 286.734 301.924 290.156 300.33C296.453 297.361 303.578 294.018 308.312 287.268C312.859 280.674 313.703 272.734 314.437 265.703C314.828 262.078 315.156 258.391 316.172 255.078C317.172 251.953 318.906 248.953 320.609 245.857C324.078 239.607 328 232.482 328 224.014C328 215.543 324.078 208.418 320.609 202.168C318.906 199.074 317.156 196.043 316.188 192.98ZM306.594 238.139C304.375 242.17 302.219 246.17 300.922 250.234C300.922 250.266 300.906 250.297 300.906 250.297C299.5 254.859 299 259.516 298.531 264.047C297.938 269.641 297.375 274.922 295.188 278.109C292.922 281.361 288.266 283.518 283.344 285.861C279.328 287.736 275.172 289.705 271.406 292.549C267.688 295.361 264.672 298.861 261.734 302.236C258.141 306.424 254.734 310.361 251.203 311.549C247.859 312.676 242.937 311.58 237.781 310.486C228.969 308.611 219.031 308.611 210.219 310.486C205.078 311.611 200.188 312.645 196.844 311.58C193.266 310.361 189.859 306.424 186.266 302.236C183.328 298.861 180.312 295.361 176.516 292.486C173.094 289.955 169.016 287.986 164.922 286.049C159.891 283.674 155.141 281.424 152.844 278.141C150.625 274.922 150.062 269.641 149.469 264.047C149 259.516 148.5 254.859 147.078 250.234C145.781 246.17 143.625 242.17 141.406 238.139C138.625 233.107 136 228.357 136 224.014S138.625 214.918 141.406 209.887C143.625 205.855 145.781 201.855 147.094 197.73C148.5 193.168 149 188.512 149.469 183.979C150.062 178.385 150.625 173.104 152.812 169.916C155.078 166.666 159.734 164.51 164.656 162.166C168.672 160.291 172.828 158.322 176.594 155.479C180.312 152.666 183.328 149.164 186.266 145.789C189.859 141.602 193.266 137.664 196.797 136.477C197.797 136.133 198.938 136.008 200.188 136.008C203.109 136.008 206.594 136.758 210.219 137.539C219.031 139.414 228.969 139.414 237.781 137.539C242.953 136.445 247.828 135.414 251.156 136.445C254.734 137.664 258.141 141.602 261.734 145.789C264.672 149.164 267.688 152.666 271.484 155.541C274.906 158.072 278.984 160.041 283.078 161.979C288.109 164.354 292.859 166.604 295.156 169.885C297.375 173.104 297.938 178.385 298.531 183.979C299 188.512 299.5 193.168 300.922 197.793C302.219 201.855 304.375 205.855 306.594 209.887C309.375 214.918 312 219.67 312 224.014S309.375 233.107 306.594 238.139Z" />
        </Icon>
    </>
}