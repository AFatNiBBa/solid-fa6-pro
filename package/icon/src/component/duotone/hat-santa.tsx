
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hat-santa` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hat-santa?s=duotone hat-santa}
 * @preview ![hat-santa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMy4zNzUgMTgzLjM3NUM0OTQuNzUgMTkyIDQ5My43NSAyMDQuNzUgNDk5LjI1IDIxNC43NUM0OTEuMTMzIDIxNy4yNDIgNDg0LjU2NiAyMjMuMjM0IDQ4MS42NTQgMjMxLjA2MkwzODQgMTkyTDQ0OCAzODRINjRMMTQ4LjM3NSAxMzYuNUMxNzQuNzUgNzMuMjUgMjM2LjYyNSAzMiAzMDUuMjUgMzJDMzU1LjI1IDMyIDQwMi42MjUgNTQgNDM1IDkyLjEyNUw1MDguODc5IDE3OS40NzdDNTA2Ljk1NyAxODAuNTc4IDUwNS4wMzkgMTgxLjcxMSA1MDMuMzc1IDE4My4zNzVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ0OCAzODRINjRDMjguNjU0IDM4NCAwIDQxMi42NTQgMCA0NDhWNDQ4QzAgNDY1LjY3MyAxNC4zMjcgNDgwIDMyIDQ4MEg0ODBDNDk3LjY3MyA0ODAgNTEyIDQ2NS42NzMgNTEyIDQ0OFY0NDhDNTEyIDQxMi42NTQgNDgzLjM0NiAzODQgNDQ4IDM4NFpNNjQwIDI0MEM2NDAgMjI3Ljg3NSA2MzEuNzUgMjE4LjEyNSA2MjAuNzUgMjE0Ljc1QzYyNi4yNSAyMDQuNzUgNjI1LjI1IDE5MiA2MTYuNjI1IDE4My4zNzVDNjA4IDE3NC43NSA1OTUuMjUgMTczLjc1IDU4NS4yNSAxNzkuMjVDNTgxLjg3NSAxNjguMjUgNTcyLjEyNSAxNjAgNTYwIDE2MFM1MzguMTI1IDE2OC4yNSA1MzQuNzUgMTc5LjI1QzUyNC43NSAxNzMuNzUgNTEyIDE3NC43NSA1MDMuMzc1IDE4My4zNzVDNDk0Ljc1IDE5MiA0OTMuNzUgMjA0Ljc1IDQ5OS4yNSAyMTQuNzVDNDg4LjI1IDIxOC4xMjUgNDgwIDIyNy44NzUgNDgwIDI0MFM0ODguMjUgMjYxLjg3NSA0OTkuMjUgMjY1LjI1QzQ5My43NSAyNzUuMjUgNDk0Ljc1IDI4OCA1MDMuMzc1IDI5Ni42MjVDNTA4LjYyNSAzMDEuNzUgNTE1LjM3NSAzMDQuMzc1IDUyMi4yNSAzMDQuMzc1QzUyNi43NSAzMDQuMzc1IDUzMC44NzUgMzAyLjg3NSA1MzQuNzUgMzAwLjc1QzUzOC4xMjUgMzExLjc1IDU0Ny44NzUgMzIwIDU2MCAzMjBTNTgxLjg3NSAzMTEuNzUgNTg1LjI1IDMwMC43NUM1ODkuMjUgMzAyLjg3NSA1OTMuMzc1IDMwNC4zNzUgNTk3Ljc1IDMwNC4zNzVDNjA0LjUgMzA0LjM3NSA2MTEuMjUgMzAxLjc1IDYxNi42MjUgMjk2LjYyNUM2MjUuMjUgMjg4IDYyNi4yNSAyNzUuMjUgNjIwLjc1IDI2NS4yNUM2MzEuNzUgMjYxLjg3NSA2NDAgMjUyLjEyNSA2NDAgMjQwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HatSanta(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M503.375 183.375C494.75 192 493.75 204.75 499.25 214.75C491.133 217.242 484.566 223.234 481.654 231.062L384 192L448 384H64L148.375 136.5C174.75 73.25 236.625 32 305.25 32C355.25 32 402.625 54 435 92.125L508.879 179.477C506.957 180.578 505.039 181.711 503.375 183.375Z" />
            <path d="M448 384H64C28.654 384 0 412.654 0 448V448C0 465.673 14.327 480 32 480H480C497.673 480 512 465.673 512 448V448C512 412.654 483.346 384 448 384ZM640 240C640 227.875 631.75 218.125 620.75 214.75C626.25 204.75 625.25 192 616.625 183.375C608 174.75 595.25 173.75 585.25 179.25C581.875 168.25 572.125 160 560 160S538.125 168.25 534.75 179.25C524.75 173.75 512 174.75 503.375 183.375C494.75 192 493.75 204.75 499.25 214.75C488.25 218.125 480 227.875 480 240S488.25 261.875 499.25 265.25C493.75 275.25 494.75 288 503.375 296.625C508.625 301.75 515.375 304.375 522.25 304.375C526.75 304.375 530.875 302.875 534.75 300.75C538.125 311.75 547.875 320 560 320S581.875 311.75 585.25 300.75C589.25 302.875 593.375 304.375 597.75 304.375C604.5 304.375 611.25 301.75 616.625 296.625C625.25 288 626.25 275.25 620.75 265.25C631.75 261.875 640 252.125 640 240Z" />
        </Icon>
    </>
}