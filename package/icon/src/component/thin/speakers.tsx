
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `speakers` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=thin speakers}
 * @preview ![speakers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIgMEgzMDRDMjc3LjUgMCAyNTYgMjEuNSAyNTYgNDhWNDY0QzI1NiA0OTAuNSAyNzcuNSA1MTIgMzA0IDUxMkg1OTJDNjE4LjUgNTEyIDY0MCA0OTAuNSA2NDAgNDY0VjQ4QzY0MCAyMS41IDYxOC41IDAgNTkyIDBaTTYyNCA0NjRDNjI0IDQ4MS42NDUgNjA5LjY0NSA0OTYgNTkyIDQ5NkgzMDRDMjg2LjM1NSA0OTYgMjcyIDQ4MS42NDUgMjcyIDQ2NFY0OEMyNzIgMzAuMzU1IDI4Ni4zNTUgMTYgMzA0IDE2SDU5MkM2MDkuNjQ1IDE2IDYyNCAzMC4zNTUgNjI0IDQ4VjQ2NFpNNDQ4IDE2MEM0NzQuNSAxNjAgNDk2IDEzOC41IDQ5NiAxMTJTNDc0LjUgNjQgNDQ4IDY0UzQwMCA4NS41IDQwMCAxMTJTNDIxLjUgMTYwIDQ0OCAxNjBaTTQ0OCA4MEM0NjUuNjQ1IDgwIDQ4MCA5NC4zNTUgNDgwIDExMlM0NjUuNjQ1IDE0NCA0NDggMTQ0UzQxNiAxMjkuNjQ1IDQxNiAxMTJTNDMwLjM1NSA4MCA0NDggODBaTTQ0OCAyMjRDMzg2LjE4OCAyMjQgMzM2IDI3NC4xNzIgMzM2IDMzNlMzODYuMTg4IDQ0OCA0NDggNDQ4UzU2MCAzOTcuODI4IDU2MCAzMzZTNTA5LjgxMiAyMjQgNDQ4IDIyNFpNNDQ4IDQzMkMzOTUuMDY0IDQzMiAzNTIgMzg4LjkzNCAzNTIgMzM2QzM1MiAyODMuMDY0IDM5NS4wNjQgMjQwIDQ0OCAyNDBTNTQ0IDI4My4wNjQgNTQ0IDMzNkM1NDQgMzg4LjkzNCA1MDAuOTM2IDQzMiA0NDggNDMyWk00NDggMjg4QzQyMS41MTYgMjg4IDQwMCAzMDkuNTA0IDQwMCAzMzZTNDIxLjUxNiAzODQgNDQ4IDM4NFM0OTYgMzYyLjQ5NiA0OTYgMzM2UzQ3NC40ODQgMjg4IDQ0OCAyODhaTTQ0OCAzNjhDNDMwLjM1NSAzNjggNDE2IDM1My42NDUgNDE2IDMzNlM0MzAuMzU1IDMwNCA0NDggMzA0UzQ4MCAzMTguMzU1IDQ4MCAzMzZTNDY1LjY0NSAzNjggNDQ4IDM2OFpNMTc2IDI4OEMxNDkuNTE2IDI4OCAxMjggMzA5LjUwNCAxMjggMzM2UzE0OS41MTYgMzg0IDE3NiAzODRTMjI0IDM2Mi40OTYgMjI0IDMzNlMyMDIuNDg0IDI4OCAxNzYgMjg4Wk0xNzYgMzY4QzE1OC4zNTUgMzY4IDE0NCAzNTMuNjQ1IDE0NCAzMzZTMTU4LjM1NSAzMDQgMTc2IDMwNFMyMDggMzE4LjM1NSAyMDggMzM2UzE5My42NDUgMzY4IDE3NiAzNjhaTTE3NiA2NEMxNDkuNSA2NCAxMjggODUuNSAxMjggMTEyUzE0OS41IDE2MCAxNzYgMTYwUzIyNCAxMzguNSAyMjQgMTEyUzIwMi41IDY0IDE3NiA2NFpNMTc2IDE0NEMxNTguMzU1IDE0NCAxNDQgMTI5LjY0NSAxNDQgMTEyUzE1OC4zNTUgODAgMTc2IDgwUzIwOCA5NC4zNTUgMjA4IDExMlMxOTMuNjQ1IDE0NCAxNzYgMTQ0Wk0yMTYgMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OFY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkgyMTZDMjIwLjQxOCA1MTIgMjI0IDUwOC40MTggMjI0IDUwNFMyMjAuNDE4IDQ5NiAyMTYgNDk2SDQ4QzMwLjMyNiA0OTYgMTYgNDgxLjY3MiAxNiA0NjRWNDhDMTYgMzAuMzI2IDMwLjMyNiAxNiA0OCAxNkgyMTZDMjIwLjQxOCAxNiAyMjQgMTIuNDE4IDIyNCA4UzIyMC40MTggMCAyMTYgMFpNMjE5LjQyNiAyMzMuMTMzQzE5OS43NTggMjI0LjcwMyAxNzcuNDc5IDIyMS4zMTYgMTUzLjYxMyAyMjYuMzY5QzEwNS4xNzIgMjM2LjYyMyA2OC4wMSAyNzguMDMxIDY0LjMyMiAzMjcuNDA4QzU5LjQxMiAzOTMuMTExIDExMS4zNDggNDQ4IDE3NiA0NDhDMTkxLjQ2NyA0NDggMjA2LjA0OSA0NDQuNiAyMTkuNDI0IDQzOC44NjdDMjIyLjIzMiA0MzcuNjY0IDIyNCA0MzQuODI0IDIyNCA0MzEuNzY4VjQzMS4yMDdDMjI0IDQyNS41NTMgMjE4LjE5NSA0MjEuOTY3IDIxMy4wMDYgNDI0LjIxM0MxOTkuMzI0IDQzMC4xMzEgMTg0LjEwOSA0MzMuMDcyIDE2Ny45MyA0MzEuNjQzQzExOS4zMDUgNDI3LjM0NiA4MC41NDUgMzg1Ljg5MSA4MC4wMDYgMzM3LjA4Qzc5LjQxNiAyODMuNjUgMTIyLjcwNSAyNDAgMTc2IDI0MEMxODkuMTcyIDI0MCAyMDEuNjExIDI0Mi44NjEgMjEyLjk4OCAyNDcuNzc5QzIxOC4xODYgMjUwLjAyNSAyMjQgMjQ2LjQ0NSAyMjQgMjQwLjc4M1YyNDAuMjI5QzIyNCAyMzcuMTc0IDIyMi4yMzQgMjM0LjMzNiAyMTkuNDI2IDIzMy4xMzNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Speakers(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M592 0H304C277.5 0 256 21.5 256 48V464C256 490.5 277.5 512 304 512H592C618.5 512 640 490.5 640 464V48C640 21.5 618.5 0 592 0ZM624 464C624 481.645 609.645 496 592 496H304C286.355 496 272 481.645 272 464V48C272 30.355 286.355 16 304 16H592C609.645 16 624 30.355 624 48V464ZM448 160C474.5 160 496 138.5 496 112S474.5 64 448 64S400 85.5 400 112S421.5 160 448 160ZM448 80C465.645 80 480 94.355 480 112S465.645 144 448 144S416 129.645 416 112S430.355 80 448 80ZM448 224C386.188 224 336 274.172 336 336S386.188 448 448 448S560 397.828 560 336S509.812 224 448 224ZM448 432C395.064 432 352 388.934 352 336C352 283.064 395.064 240 448 240S544 283.064 544 336C544 388.934 500.936 432 448 432ZM448 288C421.516 288 400 309.504 400 336S421.516 384 448 384S496 362.496 496 336S474.484 288 448 288ZM448 368C430.355 368 416 353.645 416 336S430.355 304 448 304S480 318.355 480 336S465.645 368 448 368ZM176 288C149.516 288 128 309.504 128 336S149.516 384 176 384S224 362.496 224 336S202.484 288 176 288ZM176 368C158.355 368 144 353.645 144 336S158.355 304 176 304S208 318.355 208 336S193.645 368 176 368ZM176 64C149.5 64 128 85.5 128 112S149.5 160 176 160S224 138.5 224 112S202.5 64 176 64ZM176 144C158.355 144 144 129.645 144 112S158.355 80 176 80S208 94.355 208 112S193.645 144 176 144ZM216 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H216C220.418 512 224 508.418 224 504S220.418 496 216 496H48C30.326 496 16 481.672 16 464V48C16 30.326 30.326 16 48 16H216C220.418 16 224 12.418 224 8S220.418 0 216 0ZM219.426 233.133C199.758 224.703 177.479 221.316 153.613 226.369C105.172 236.623 68.01 278.031 64.322 327.408C59.412 393.111 111.348 448 176 448C191.467 448 206.049 444.6 219.424 438.867C222.232 437.664 224 434.824 224 431.768V431.207C224 425.553 218.195 421.967 213.006 424.213C199.324 430.131 184.109 433.072 167.93 431.643C119.305 427.346 80.545 385.891 80.006 337.08C79.416 283.65 122.705 240 176 240C189.172 240 201.611 242.861 212.988 247.779C218.186 250.025 224 246.445 224 240.783V240.229C224 237.174 222.234 234.336 219.426 233.133Z" />
        </Icon>
    </>
}