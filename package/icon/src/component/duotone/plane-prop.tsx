
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `plane-prop` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plane-prop?s=duotone plane-prop}
 * @preview ![plane-prop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMwNS41NjIgMTkySDM0Ny4yNjhMMzIxLjgwMyAxMy43MzZDMzIwLjY3NiA1Ljg1NCAzMTMuOTI2IDAgMzA1Ljk2MyAwSDI2OS43MTdDMjYxLjc1NCAwIDI1NS4wMDQgNS44NTQgMjUzLjg3NyAxMy43MzZMMjI3LjQ1MyAxOTguNzA5TDI3MC4yMjUgMTkzLjk1N0MyODEuOTU5IDE5Mi42NTIgMjkzLjc1NiAxOTIgMzA1LjU2MiAxOTJaTTQ5LjAwNCAzNzYuMTVDNDkuNjQ4IDM4MC42NTQgNTMuNTA2IDM4NCA1OC4wNTUgMzg0SDEwMS42MjVDMTA2LjE3NCAzODQgMTEwLjAzMSAzODAuNjU0IDExMC42NzYgMzc2LjE1TDEyMS4zNCAzMDEuNUwzNyAyOTIuMTI5TDQ5LjAwNCAzNzYuMTVaTTI3MC4yMjUgMzE4LjA0M0wyMjcuNDUzIDMxMy4yOTFMMjUzLjg3NyA0OTguMjYyQzI1NS4wMDQgNTA2LjE0NSAyNjEuNzU0IDUxMiAyNjkuNzE3IDUxMkgzMDUuOTYzQzMxMy45MjYgNTEyIDMyMC42NzYgNTA2LjE0NSAzMjEuODAzIDQ5OC4yNjJMMzQ3LjI2OCAzMjBIMzA1LjU2MkMyOTMuNzU2IDMyMCAyODEuOTU5IDMxOS4zNDYgMjcwLjIyNSAzMTguMDQzWk0xMDEuNjI1IDEyOEg1OC4wNTVDNTMuNTA2IDEyOCA0OS42NDggMTMxLjM0NiA0OS4wMDQgMTM1Ljg1TDM3LjAwMiAyMTkuODY5TDEyMS4zNCAyMTAuNUwxMTAuNjc2IDEzNS44NUMxMTAuMDMxIDEzMS4zNDYgMTA2LjE3NCAxMjggMTAxLjYyNSAxMjhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM2OCAxMjhWMTQ0QzM2OCAxNTIuODM2IDM3NS4xNjQgMTYwIDM4NCAxNjBTNDAwIDE1Mi44MzYgNDAwIDE0NFYxMTJDNDA4LjgzNiAxMTIgNDE2IDEwNC44MzYgNDE2IDk2QzQxNiA4Ny4xNjIgNDA4LjgzNiA4MCA0MDAgODBWNDhDNDAwIDM5LjE2MiAzOTIuODM2IDMyIDM4NCAzMlMzNjggMzkuMTYyIDM2OCA0OFY2NEgzMjkuMTQzTDMzOC4yODUgMTI4SDM2OFpNMjI0IDEyOEgyMzcuNzE1TDI0Ni44NTcgNjRIMjI0QzIwNi4zMjYgNjQgMTkyIDc4LjMyNiAxOTIgOTZDMTkyIDExMy42NzIgMjA2LjMyNiAxMjggMjI0IDEyOFpNNDc5Ljk5OCAxOTJIMzA1LjcyM0MyOTMuOTE2IDE5MiAyODIuMTE5IDE5Mi42NTIgMjcwLjM4NSAxOTMuOTU3TDMxLjgwNSAyMjAuNDY1QzEzLjY5NyAyMjIuNDc3IDAgMjM3Ljc4MSAwIDI1NkMwIDI3NC4yMTcgMTMuNjk3IDI4OS41MjEgMzEuODA1IDI5MS41MzNMMjcwLjM4NSAzMTguMDQzQzI4Mi4xMTkgMzE5LjM0NiAyOTMuOTE2IDMyMCAzMDUuNzIzIDMyMEg0NjQuNTI1QzQ5NC4xMzkgMzIwIDUyMy43ODMgMzEyLjQ2MSA1NDguMjgzIDI5NS44MjZDNjIzLjA1NSAyNDUuMDU5IDUyOC4wOTIgMTkyIDQ3OS45OTggMTkyWk0yMjQgMzg0QzIwNi4zMjYgMzg0IDE5MiAzOTguMzI2IDE5MiA0MTZDMTkyIDQzMy42NzIgMjA2LjMyNiA0NDggMjI0IDQ0OEgyNDYuODU3TDIzNy43MTUgMzg0SDIyNFpNNDAwIDQwMFYzNjhDNDAwIDM1OS4xNjIgMzkyLjgzNiAzNTIgMzg0IDM1MlMzNjggMzU5LjE2MiAzNjggMzY4VjM4NEgzMzguMjg1TDMyOS4xNDMgNDQ4SDM2OFY0NjRDMzY4IDQ3Mi44MzYgMzc1LjE2NCA0ODAgMzg0IDQ4MFM0MDAgNDcyLjgzNiA0MDAgNDY0VjQzMkM0MDguODM2IDQzMiA0MTYgNDI0LjgzNiA0MTYgNDE2QzQxNiA0MDcuMTYyIDQwOC44MzYgNDAwIDQwMCA0MDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PlaneProp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M305.562 192H347.268L321.803 13.736C320.676 5.854 313.926 0 305.963 0H269.717C261.754 0 255.004 5.854 253.877 13.736L227.453 198.709L270.225 193.957C281.959 192.652 293.756 192 305.562 192ZM49.004 376.15C49.648 380.654 53.506 384 58.055 384H101.625C106.174 384 110.031 380.654 110.676 376.15L121.34 301.5L37 292.129L49.004 376.15ZM270.225 318.043L227.453 313.291L253.877 498.262C255.004 506.145 261.754 512 269.717 512H305.963C313.926 512 320.676 506.145 321.803 498.262L347.268 320H305.562C293.756 320 281.959 319.346 270.225 318.043ZM101.625 128H58.055C53.506 128 49.648 131.346 49.004 135.85L37.002 219.869L121.34 210.5L110.676 135.85C110.031 131.346 106.174 128 101.625 128Z" />
            <path d="M368 128V144C368 152.836 375.164 160 384 160S400 152.836 400 144V112C408.836 112 416 104.836 416 96C416 87.162 408.836 80 400 80V48C400 39.162 392.836 32 384 32S368 39.162 368 48V64H329.143L338.285 128H368ZM224 128H237.715L246.857 64H224C206.326 64 192 78.326 192 96C192 113.672 206.326 128 224 128ZM479.998 192H305.723C293.916 192 282.119 192.652 270.385 193.957L31.805 220.465C13.697 222.477 0 237.781 0 256C0 274.217 13.697 289.521 31.805 291.533L270.385 318.043C282.119 319.346 293.916 320 305.723 320H464.525C494.139 320 523.783 312.461 548.283 295.826C623.055 245.059 528.092 192 479.998 192ZM224 384C206.326 384 192 398.326 192 416C192 433.672 206.326 448 224 448H246.857L237.715 384H224ZM400 400V368C400 359.162 392.836 352 384 352S368 359.162 368 368V384H338.285L329.143 448H368V464C368 472.836 375.164 480 384 480S400 472.836 400 464V432C408.836 432 416 424.836 416 416C416 407.162 408.836 400 400 400Z" />
        </Icon>
    </>
}