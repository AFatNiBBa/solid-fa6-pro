
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `truck-monster` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-monster?s=light truck-monster}
 * @preview ![truck-monster](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMzA0QzEyNC42NTQgMzA0IDk2IDMzMi42NTIgOTYgMzY4Qzk2IDQwMy4zNDYgMTI0LjY1NCA0MzIgMTYwIDQzMlMyMjQgNDAzLjM0NiAyMjQgMzY4QzIyNCAzMzIuNjUyIDE5NS4zNDYgMzA0IDE2MCAzMDRaTTE2MCA0MDBDMTQyLjM1NSA0MDAgMTI4IDM4NS42NDUgMTI4IDM2OFMxNDIuMzU1IDMzNiAxNjAgMzM2UzE5MiAzNTAuMzU1IDE5MiAzNjhTMTc3LjY0NSA0MDAgMTYwIDQwMFpNNDgwIDMwNEM0NDQuNjU0IDMwNCA0MTYgMzMyLjY1MiA0MTYgMzY4QzQxNiA0MDMuMzQ2IDQ0NC42NTQgNDMyIDQ4MCA0MzJTNTQ0IDQwMy4zNDYgNTQ0IDM2OEM1NDQgMzMyLjY1MiA1MTUuMzQ2IDMwNCA0ODAgMzA0Wk00ODAgNDAwQzQ2Mi4zNTUgNDAwIDQ0OCAzODUuNjQ1IDQ0OCAzNjhTNDYyLjM1NSAzMzYgNDgwIDMzNlM1MTIgMzUwLjM1NSA1MTIgMzY4UzQ5Ny42NDUgNDAwIDQ4MCA0MDBaTTYyNCAyODhINjA4VjE5MkM2MDggMTU2Ljc5OSA1NzkuMTk5IDEyOCA1NDQgMTI4SDUwMi4zNzVMNDE5LjI1IDI0QzQwNy4xMjcgOC44MyAzODguNzYyIDAgMzY5LjM0NCAwSDI1NkMyMzguNCAwIDIyNCAxNC40IDIyNCAzMlYxMjhIOTZDNjAuNjU0IDEyOCAzMiAxNTYuNjUyIDMyIDE5MlYyODhIMTZDNy4xNjQgMjg4IDAgMjk1LjE2MiAwIDMwNEMwIDMxMi44MzYgNy4xNjQgMzIwIDE2IDMyMEgzMS41MTRDMjIuMTI1IDMyOC40MjYgMTYgMzQwLjQyIDE2IDM1NFYzODJDMTYgMzk3LjQ2OSAyMy42NzYgNDExLjE4IDM1LjQxOCA0MTkuNTIxQzM0Ljk4IDQyMi4wOCAzNC43NTggNDI0LjY5MSAzNC43NTggNDI3LjMzNkMzNC43NTggNDM5LjYyMSAzOS41NDMgNDUxLjE3NCA0OC4yMzIgNDU5Ljg2MUw2OC4wMjkgNDc5LjY1OEM3Ni43MTkgNDg4LjM0OCA4OC4yODkgNDkzLjEzMyAxMDAuNjA5IDQ5My4xMzNDMTAzLjI1IDQ5My4xMzMgMTA1Ljg1NSA0OTIuOTEyIDEwOC40MDYgNDkyLjQ4MkMxMTYuNzQyIDUwNC4yODEgMTMwLjQ4NiA1MTIgMTQ1Ljk5OSA1MTJIMTczLjk5OUMxODkuNTE4IDUxMiAyMDMuMjY0IDUwNC4yNzcgMjExLjYgNDkyLjQ3M0MyMTQuMTY0IDQ5Mi45MDggMjE2Ljc4NyA0OTMuMTMzIDIxOS40NDUgNDkzLjEzM0MyMzEuNzMgNDkzLjEzMyAyNDMuMjgxIDQ4OC4zNDggMjUxLjk3MSA0NzkuNjZMMjcxLjc2OCA0NTkuODYxQzI4MC40NTcgNDUxLjE3NCAyODUuMjQyIDQzOS42MjEgMjg1LjI0MiA0MjcuMzM2QzI4NS4yNDIgNDI0LjY4OSAyODUuMDIgNDIyLjA3NiAyODQuNTg0IDQxOS41MkMyOTYuMzI0IDQxMS4xNzggMzA0IDM5Ny40NjcgMzA0IDM4MlYzNTRDMzA0IDM0MC40MTggMjk3Ljg3MyAzMjguNDI4IDI4OC40ODQgMzIwSDM1MS41MTRDMzQyLjEyNyAzMjguNDMgMzM2IDM0MC40MiAzMzYgMzU0VjM4MkMzMzYgMzk3LjUwMiAzNDMuNzA3IDQxMS4yMzggMzU1LjQ5MiA0MTkuNTc2QzM1My4wMDQgNDMzLjg4MyAzNTcuMjgxIDQ0OS4wMiAzNjguMjMyIDQ1OS45NzFMMzg4LjAyOSA0NzkuNzY4QzM5Ni43MTcgNDg4LjQ1NyA0MDguMjg5IDQ5My4yNDIgNDIwLjYwOSA0OTMuMjQyQzQyMy4yNzMgNDkzLjI0MiA0MjUuOTAyIDQ5My4wMTggNDI4LjQ3NyA0OTIuNTc4QzQzNi44MTggNTA0LjMyMiA0NTAuNTI5IDUxMiA0NjUuOTk5IDUxMkg0OTMuOTk5QzUwOS40NzUgNTEyIDUyMy4xOTEgNTA0LjMxOCA1MzEuNTMzIDQ5Mi41NjhDNTM0LjEyMSA0OTMuMDE0IDUzNi43NjYgNDkzLjI0MiA1MzkuNDQ1IDQ5My4yNDJDNTUxLjczIDQ5My4yNDIgNTYzLjI4MyA0ODguNDU3IDU3MS45NzEgNDc5Ljc2OEw1OTEuNzY4IDQ1OS45NzFDNjAyLjc1MiA0NDguOTg2IDYwNy4wMiA0MzMuNzg3IDYwNC41NzIgNDE5LjUyOUM2MTYuMzIgNDExLjE4OCA2MjQgMzk3LjQ3MyA2MjQgMzgyVjM1NEM2MjQgMzQwLjQxOCA2MTcuODczIDMyOC40MjggNjA4LjQ4NCAzMjBINjI0QzYzMi44MzYgMzIwIDY0MCAzMTIuODM2IDY0MCAzMDRDNjQwIDI5NS4xNjIgNjMyLjgzNiAyODggNjI0IDI4OFpNMjU2IDMySDM2OS4zNDRDMzc5LjA5IDMyIDM4OC4xNyAzNi4zNjUgMzk0LjI1NCA0My45NzlMNDYxLjQxIDEyOEgyNTZWMzJaTTI3MiAzODJDMjcyIDM4OS43NjYgMjY1Ljc2NiAzOTYgMjU3Ljk5OSAzOTZIMjUzLjUxNkMyNTEuNTQ3IDQwMi4zNDQgMjQ5LjAzMSA0MDguNDY5IDI0NS44NTkgNDE0LjI2NkwyNDkuMTQxIDQxNy40MzhDMjU0LjYwOSA0MjIuOTA2IDI1NC42MDkgNDMxLjc2NiAyNDkuMTQxIDQzNy4yMzRMMjI5LjM0NCA0NTcuMDMxQzIyNi42MDkgNDU5Ljc2NiAyMjMuMDI3IDQ2MS4xMzMgMjE5LjQ0NSA0NjEuMTMzUzIxMi4yODEgNDU5Ljc2NiAyMDkuNTQ3IDQ1Ny4wMzFMMjA2LjI2NiA0NTMuODU5QzIwMC40NjkgNDU3LjAzMSAxOTQuNDUzIDQ1OS41NDcgMTg4IDQ2MS40MDZWNDY2QzE4OCA0NzMuNzY2IDE4MS43NjYgNDgwIDE3My45OTkgNDgwSDE0NS45OTlDMTM4LjIzNCA0ODAgMTMyIDQ3My43NjYgMTMyIDQ2NlY0NjEuNDA2QzEyNS41NDcgNDU5LjU0NyAxMTkuNTMxIDQ1Ny4wMzEgMTEzLjczNCA0NTMuODU5TDExMC41NjIgNDU3LjAzMUMxMDcuODI4IDQ1OS43NjYgMTA0LjIxOSA0NjEuMTMzIDEwMC42MDkgNDYxLjEzM1M5My4zOTEgNDU5Ljc2NiA5MC42NTYgNDU3LjAzMUw3MC44NTkgNDM3LjIzNEM2NS4zOTEgNDMxLjc2NiA2NS4zOTEgNDIyLjkwNiA3MC44NTkgNDE3LjQzOEw3NC4xNDEgNDE0LjI2NkM3MC45NjkgNDA4LjQ2OSA2OC40NTMgNDAyLjQ1MyA2Ni41OTQgMzk2SDYxLjk5OUM1NC4yMzQgMzk2IDQ4IDM4OS43NjYgNDggMzgyVjM1NEM0OCAzNDYuMjM0IDU0LjIzNCAzNDAgNjEuOTk5IDM0MEg2Ni41OTRDNjguNDUzIDMzMy42NTYgNzAuOTY5IDMyNy41MzEgNzQuMTQxIDMyMS43MzRMNzAuODU5IDMxOC40NTNDNjUuMzkxIDMxMi45ODQgNjUuMzkxIDMwNC4xMjUgNzAuODU5IDI5OC42NTZMOTAuNjU2IDI3OC44NTlDOTMuMzkxIDI3Ni4xMjUgOTcgMjc0Ljc1OCAxMDAuNjA5IDI3NC43NThTMTA3LjgyOCAyNzYuMTI1IDExMC41NjMgMjc4Ljg1OUwxMTMuNzM0IDI4Mi4xNDFDMTE5LjUzMSAyNzguOTY5IDEyNS41NDcgMjc2LjQ1MyAxMzIgMjc0LjU5NFYyNzBDMTMyIDI2Mi4yMzQgMTM4LjIzNCAyNTYgMTQ1Ljk5OSAyNTZIMTczLjk5OUMxODEuNzY2IDI1NiAxODggMjYyLjIzNCAxODggMjcwVjI3NC41OTRDMTk0LjM0NCAyNzYuNDUzIDIwMC40NjkgMjc4Ljk2OSAyMDYuMjY2IDI4Mi4xNDFMMjA5LjQzOCAyNzguODU5QzIxMi4xNzIgMjc2LjEyNSAyMTUuNzgxIDI3NC43NTggMjE5LjM5MSAyNzQuNzU4UzIyNi42MDkgMjc2LjEyNSAyMjkuMzQ0IDI3OC44NTlMMjQ5LjE0MSAyOTguNjU2QzI1NC42MDkgMzA0LjEyNSAyNTQuNjA5IDMxMy4wOTQgMjQ5LjE0MSAzMTguNTYyTDI0NS44NTkgMzIxLjczNEMyNDkuMDMxIDMyNy41MzEgMjUxLjU0NyAzMzMuNTQ3IDI1My40MDYgMzQwSDI1Ny45OTlDMjY1Ljc2NiAzNDAgMjcyIDM0Ni4yMzQgMjcyIDM1NFYzODJaTTI4MC4zNjMgMjg4LjYzMUMyNzguMTg0IDI4NC4xMDcgMjc1LjUxMiAyNzkuNzcxIDI3MS43NjggMjc2LjAyN0wyNTEuOTcxIDI1Ni4yMzJDMjQzLjI4MSAyNDcuNTQzIDIzMS43MTEgMjQyLjc1OCAyMTkuMzkxIDI0Mi43NThDMjE2LjcyNyAyNDIuNzU4IDIxNC4wOTggMjQyLjk4IDIxMS41MjMgMjQzLjQyQzIwMy4xODIgMjMxLjY3NiAxODkuNDcxIDIyNCAxNzMuOTk5IDIyNEgxNDUuOTk5QzEzMC41MjcgMjI0IDExNi44MTYgMjMxLjY3NiAxMDguNDc1IDI0My40MjJDMTA1LjkgMjQyLjk4IDEwMy4yNzEgMjQyLjc1OCAxMDAuNjA5IDI0Mi43NThDODguMjg5IDI0Mi43NTggNzYuNzE5IDI0Ny41NDMgNjguMDI5IDI1Ni4yMzJMNjQgMjYwLjI2MlYxOTJDNjQgMTc0LjM1NSA3OC4zNTUgMTYwIDk2IDE2MEg1NDRDNTYxLjY0NSAxNjAgNTc2IDE3NC4zNTUgNTc2IDE5MlYyNjAuMjYyTDU3MS45NzEgMjU2LjIzMkM1NjMuMjgxIDI0Ny41NDMgNTUxLjcxMSAyNDIuNzU4IDUzOS4zOTEgMjQyLjc1OEM1MzYuNzI3IDI0Mi43NTggNTM0LjA5OCAyNDIuOTggNTMxLjUyMyAyNDMuNDJDNTIzLjE4MiAyMzEuNjc2IDUwOS40NzEgMjI0IDQ5My45OTkgMjI0SDQ2NS45OTlDNDUwLjUyNyAyMjQgNDM2LjgxNiAyMzEuNjc2IDQyOC40NzUgMjQzLjQyMkM0MjUuOSAyNDIuOTggNDIzLjI3MSAyNDIuNzU4IDQyMC42MDkgMjQyLjc1OEM0MDguMjg5IDI0Mi43NTggMzk2LjcxOSAyNDcuNTQzIDM4OC4wMjkgMjU2LjIzMkwzNjguMjMyIDI3Ni4wMjdDMzY0LjYyNyAyNzkuNjM1IDM2Mi4wMTYgMjgzLjc4OSAzNTkuODU3IDI4OC4xMjFMMjgwLjM2MyAyODguNjMxWk01OTIgMzgyQzU5MiAzODkuNzY2IDU4NS43NjYgMzk2IDU3Ny45OTkgMzk2SDU3My41MTZDNTcxLjU0NyA0MDIuMzQ0IDU2OS4wMzEgNDA4LjQ2OSA1NjUuODU5IDQxNC4yNjZMNTY5LjE0MSA0MTcuNDM4QzU3NC42MDkgNDIyLjkwNiA1NzQuNjA5IDQzMS44NzUgNTY5LjE0MSA0MzcuMzQ0TDU0OS4zNDQgNDU3LjE0MUM1NDYuNjA5IDQ1OS44NzUgNTQzLjAyNyA0NjEuMjQyIDUzOS40NDUgNDYxLjI0MlM1MzIuMjgxIDQ1OS44NzUgNTI5LjU0NyA0NTcuMTQxTDUyNi4yNjYgNDUzLjg1OUM1MjAuNDY5IDQ1Ny4wMzEgNTE0LjQ1MyA0NTkuNTQ3IDUwOCA0NjEuNDA2VjQ2NkM1MDggNDczLjc2NiA1MDEuNzY2IDQ4MCA0OTMuOTk5IDQ4MEg0NjUuOTk5QzQ1OC4yMzQgNDgwIDQ1MiA0NzMuNzY2IDQ1MiA0NjZWNDYxLjQwNkM0NDUuNTQ3IDQ1OS41NDcgNDM5LjUzMSA0NTcuMDMxIDQzMy43MzQgNDUzLjg1OUw0MzAuNTYyIDQ1Ny4xNDFDNDI3LjgyOCA0NTkuODc1IDQyNC4yMTkgNDYxLjI0MiA0MjAuNjA5IDQ2MS4yNDJTNDEzLjM5MSA0NTkuODc1IDQxMC42NTYgNDU3LjE0MUwzOTAuODU5IDQzNy4zNDRDMzg1LjM5MSA0MzEuODc1IDM4NS4zOTEgNDIyLjkwNiAzOTAuODU5IDQxNy40MzhMMzk0LjE0MSA0MTQuMjY2QzM5MC45NjkgNDA4LjQ2OSAzODguNDUzIDQwMi40NTMgMzg2LjU5NCAzOTZIMzgxLjk5OUMzNzQuMjM0IDM5NiAzNjggMzg5Ljc2NiAzNjggMzgyVjM1NEMzNjggMzQ2LjIzNCAzNzQuMjM0IDM0MCAzODEuOTk5IDM0MEgzODYuNTk0QzM4OC40NTMgMzMzLjY1NiAzOTAuOTY5IDMyNy41MzEgMzk0LjE0MSAzMjEuNzM0TDM5MC44NTkgMzE4LjU2MkMzODUuMzkxIDMxMy4wOTQgMzg1LjM5MSAzMDQuMTI1IDM5MC44NTkgMjk4LjY1Nkw0MTAuNjU2IDI3OC44NTlDNDEzLjM5MSAyNzYuMTI1IDQxNyAyNzQuNzU4IDQyMC42MDkgMjc0Ljc1OFM0MjcuODI4IDI3Ni4xMjUgNDMwLjU2MyAyNzguODU5TDQzMy43MzQgMjgyLjE0MUM0MzkuNTMxIDI3OC45NjkgNDQ1LjU0NyAyNzYuNDUzIDQ1MiAyNzQuNTk0VjI3MEM0NTIgMjYyLjIzNCA0NTguMjM0IDI1NiA0NjUuOTk5IDI1Nkg0OTMuOTk5QzUwMS43NjYgMjU2IDUwOCAyNjIuMjM0IDUwOCAyNzBWMjc0LjU5NEM1MTQuMzQ0IDI3Ni40NTMgNTIwLjQ2OSAyNzguOTY5IDUyNi4yNjYgMjgyLjE0MUw1MjkuNDM4IDI3OC44NTlDNTMyLjE3MiAyNzYuMTI1IDUzNS43ODEgMjc0Ljc1OCA1MzkuMzkxIDI3NC43NThTNTQ2LjYwOSAyNzYuMTI1IDU0OS4zNDQgMjc4Ljg1OUw1NjkuMTQxIDI5OC42NTZDNTc0LjYwOSAzMDQuMTI1IDU3NC42MDkgMzEzLjA5NCA1NjkuMTQxIDMxOC41NjJMNTY1Ljg1OSAzMjEuNzM0QzU2OS4wMzEgMzI3LjUzMSA1NzEuNTQ3IDMzMy41NDcgNTczLjQwNiAzNDBINTc3Ljk5OUM1ODUuNzY2IDM0MCA1OTIgMzQ2LjIzNCA1OTIgMzU0VjM4MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TruckMonster(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M160 304C124.654 304 96 332.652 96 368C96 403.346 124.654 432 160 432S224 403.346 224 368C224 332.652 195.346 304 160 304ZM160 400C142.355 400 128 385.645 128 368S142.355 336 160 336S192 350.355 192 368S177.645 400 160 400ZM480 304C444.654 304 416 332.652 416 368C416 403.346 444.654 432 480 432S544 403.346 544 368C544 332.652 515.346 304 480 304ZM480 400C462.355 400 448 385.645 448 368S462.355 336 480 336S512 350.355 512 368S497.645 400 480 400ZM624 288H608V192C608 156.799 579.199 128 544 128H502.375L419.25 24C407.127 8.83 388.762 0 369.344 0H256C238.4 0 224 14.4 224 32V128H96C60.654 128 32 156.652 32 192V288H16C7.164 288 0 295.162 0 304C0 312.836 7.164 320 16 320H31.514C22.125 328.426 16 340.42 16 354V382C16 397.469 23.676 411.18 35.418 419.521C34.98 422.08 34.758 424.691 34.758 427.336C34.758 439.621 39.543 451.174 48.232 459.861L68.029 479.658C76.719 488.348 88.289 493.133 100.609 493.133C103.25 493.133 105.855 492.912 108.406 492.482C116.742 504.281 130.486 512 145.999 512H173.999C189.518 512 203.264 504.277 211.6 492.473C214.164 492.908 216.787 493.133 219.445 493.133C231.73 493.133 243.281 488.348 251.971 479.66L271.768 459.861C280.457 451.174 285.242 439.621 285.242 427.336C285.242 424.689 285.02 422.076 284.584 419.52C296.324 411.178 304 397.467 304 382V354C304 340.418 297.873 328.428 288.484 320H351.514C342.127 328.43 336 340.42 336 354V382C336 397.502 343.707 411.238 355.492 419.576C353.004 433.883 357.281 449.02 368.232 459.971L388.029 479.768C396.717 488.457 408.289 493.242 420.609 493.242C423.273 493.242 425.902 493.018 428.477 492.578C436.818 504.322 450.529 512 465.999 512H493.999C509.475 512 523.191 504.318 531.533 492.568C534.121 493.014 536.766 493.242 539.445 493.242C551.73 493.242 563.283 488.457 571.971 479.768L591.768 459.971C602.752 448.986 607.02 433.787 604.572 419.529C616.32 411.188 624 397.473 624 382V354C624 340.418 617.873 328.428 608.484 320H624C632.836 320 640 312.836 640 304C640 295.162 632.836 288 624 288ZM256 32H369.344C379.09 32 388.17 36.365 394.254 43.979L461.41 128H256V32ZM272 382C272 389.766 265.766 396 257.999 396H253.516C251.547 402.344 249.031 408.469 245.859 414.266L249.141 417.438C254.609 422.906 254.609 431.766 249.141 437.234L229.344 457.031C226.609 459.766 223.027 461.133 219.445 461.133S212.281 459.766 209.547 457.031L206.266 453.859C200.469 457.031 194.453 459.547 188 461.406V466C188 473.766 181.766 480 173.999 480H145.999C138.234 480 132 473.766 132 466V461.406C125.547 459.547 119.531 457.031 113.734 453.859L110.562 457.031C107.828 459.766 104.219 461.133 100.609 461.133S93.391 459.766 90.656 457.031L70.859 437.234C65.391 431.766 65.391 422.906 70.859 417.438L74.141 414.266C70.969 408.469 68.453 402.453 66.594 396H61.999C54.234 396 48 389.766 48 382V354C48 346.234 54.234 340 61.999 340H66.594C68.453 333.656 70.969 327.531 74.141 321.734L70.859 318.453C65.391 312.984 65.391 304.125 70.859 298.656L90.656 278.859C93.391 276.125 97 274.758 100.609 274.758S107.828 276.125 110.563 278.859L113.734 282.141C119.531 278.969 125.547 276.453 132 274.594V270C132 262.234 138.234 256 145.999 256H173.999C181.766 256 188 262.234 188 270V274.594C194.344 276.453 200.469 278.969 206.266 282.141L209.438 278.859C212.172 276.125 215.781 274.758 219.391 274.758S226.609 276.125 229.344 278.859L249.141 298.656C254.609 304.125 254.609 313.094 249.141 318.562L245.859 321.734C249.031 327.531 251.547 333.547 253.406 340H257.999C265.766 340 272 346.234 272 354V382ZM280.363 288.631C278.184 284.107 275.512 279.771 271.768 276.027L251.971 256.232C243.281 247.543 231.711 242.758 219.391 242.758C216.727 242.758 214.098 242.98 211.523 243.42C203.182 231.676 189.471 224 173.999 224H145.999C130.527 224 116.816 231.676 108.475 243.422C105.9 242.98 103.271 242.758 100.609 242.758C88.289 242.758 76.719 247.543 68.029 256.232L64 260.262V192C64 174.355 78.355 160 96 160H544C561.645 160 576 174.355 576 192V260.262L571.971 256.232C563.281 247.543 551.711 242.758 539.391 242.758C536.727 242.758 534.098 242.98 531.523 243.42C523.182 231.676 509.471 224 493.999 224H465.999C450.527 224 436.816 231.676 428.475 243.422C425.9 242.98 423.271 242.758 420.609 242.758C408.289 242.758 396.719 247.543 388.029 256.232L368.232 276.027C364.627 279.635 362.016 283.789 359.857 288.121L280.363 288.631ZM592 382C592 389.766 585.766 396 577.999 396H573.516C571.547 402.344 569.031 408.469 565.859 414.266L569.141 417.438C574.609 422.906 574.609 431.875 569.141 437.344L549.344 457.141C546.609 459.875 543.027 461.242 539.445 461.242S532.281 459.875 529.547 457.141L526.266 453.859C520.469 457.031 514.453 459.547 508 461.406V466C508 473.766 501.766 480 493.999 480H465.999C458.234 480 452 473.766 452 466V461.406C445.547 459.547 439.531 457.031 433.734 453.859L430.562 457.141C427.828 459.875 424.219 461.242 420.609 461.242S413.391 459.875 410.656 457.141L390.859 437.344C385.391 431.875 385.391 422.906 390.859 417.438L394.141 414.266C390.969 408.469 388.453 402.453 386.594 396H381.999C374.234 396 368 389.766 368 382V354C368 346.234 374.234 340 381.999 340H386.594C388.453 333.656 390.969 327.531 394.141 321.734L390.859 318.562C385.391 313.094 385.391 304.125 390.859 298.656L410.656 278.859C413.391 276.125 417 274.758 420.609 274.758S427.828 276.125 430.563 278.859L433.734 282.141C439.531 278.969 445.547 276.453 452 274.594V270C452 262.234 458.234 256 465.999 256H493.999C501.766 256 508 262.234 508 270V274.594C514.344 276.453 520.469 278.969 526.266 282.141L529.438 278.859C532.172 276.125 535.781 274.758 539.391 274.758S546.609 276.125 549.344 278.859L569.141 298.656C574.609 304.125 574.609 313.094 569.141 318.562L565.859 321.734C569.031 327.531 571.547 333.547 573.406 340H577.999C585.766 340 592 346.234 592 354V382Z" />
        </Icon>
    </>
}