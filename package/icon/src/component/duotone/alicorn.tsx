
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `alicorn` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/alicorn?s=duotone alicorn}
 * @preview ![alicorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0LjM2NCAyMTUuNzRDNTQuMDc0IDIyMy4yNjYgNDcuOTk1IDIzNS4yNTIgNDguMDAzIDI0OFYzMDRDNDguMDAzIDMxMi44MzcgNDAuODM5IDMyMCAzMi4wMDIgMzIwSDE2LjAwMUM3LjE2NCAzMjAgMCAzMTIuODM3IDAgMzA0VjI0OEMwIDE5OS4zOTkgMzkuNDAxIDE2MCA4OC4wMDUgMTYwSDg4LjQ1NUM3NC41NzggMTc1LjQ2NyA2Ni4xMjEgMTk1LjAzNSA2NC4zNjQgMjE1Ljc0Wk02MzIuMDM2IDMySDUzMS45NkM1MjguODk2IDM1LjE4OCA1MjUuNDQyIDM3Ljk3NiA1MjEuNjggNDAuM0M1MjYuNzkgNDUuNjggNTMxLjU5IDUwLjc3IDUzNS4zNyA1NC44QzU0MC45MDQgNjAuNzA4IDU0My45NzMgNjguNTA1IDU0My45NTEgNzYuNlY4My4zNEw2MzYuNDQ2IDQ2LjY1QzY0MC4xMTkgNDQuMTk0IDY0MS4xMDUgMzkuMjI2IDYzOC42NDkgMzUuNTUzQzYzNy4xNzIgMzMuMzQ0IDYzNC42OTQgMzIuMDEyIDYzMi4wMzYgMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTU0My45NDMgNzYuNkM1NDMuOTYxIDY4LjUwMiA1NDAuODg0IDYwLjcwNSA1MzUuMzQzIDU0Ljc5OUM1MzEuNTY0IDUwLjc5OSA1MjYuNzYzIDQ1LjY4IDUyMS42NTQgNDAuMjk5QzUzMi43MTUgMzMuNDU5IDU0MS4xNTQgMjIuODA5IDU0My44MzQgOS42MzlDNTQ0LjY4OSA1LjI1NCA1NDEuODI4IDEuMDA2IDUzNy40NDMgMC4xNDhDNTM2LjkzNSAwLjA1MSA1MzYuNDIgMCA1MzUuOTA0IDBINDE1LjkwNEMzNDYuNjc0IDAgMjg4LjAwNCA2NCAyODguMDA0IDEyOEgyODcuOTI0QzIyNC4wMDYgMTI4IDE4My43MjQgOTEuMjIxIDE2MC4yNjUgMzcuNzMyQzE1Ni45NTUgMzAuMTg4IDE0Ni42NjYgMzAuMDIxIDE0My4xNSAzNy40NzFDMTMzLjE3IDU4LjYxNyAxMjcuOTk4IDgxLjcxMyAxMjguMDA0IDEwNS4xQzEyOC4wMDQgMTcyLjEgMTc5LjAwNCAyNDEuMzUgMjU2LjAwNCAyNTZDMTU5LjEzNCAyNTYgMTE3LjI1NCAxODIuNjk5IDEwMi42MTMgMTQ3QzYwLjExMyAxNzguNjk3IDUxLjM1MyAyMzguODQ2IDgzLjA1IDI4MS4zNDhDODYuNDY1IDI4NS45MjYgOTAuMjgxIDI5MC4xODkgOTQuNDUzIDI5NC4wOUw2OC44MjQgMzYyLjQ3N0M2NC4yNjkgMzc0LjYzMyA2My41MTUgMzg3Ljg4NSA2Ni42NjQgNDAwLjQ4TDg4LjM0OSA0ODcuNzdDOTEuOTE0IDUwMi4wMSAxMDQuNzExIDUxMiAxMTkuMzkgNTEySDE1Mi4zNzVDMTczLjE4NSA1MTIgMTg4LjQ1OSA0OTIuNDQ3IDE4My40MjQgNDcyLjI1NkwxNjIuMTkzIDM4Ni44NTlMMTg2LjAwMyAzMjMuMjdMMjg4LjAwNCAzNDUuNThWNDgwQzI4OC4wMDQgNDk3LjY3MiAzMDIuMzMgNTEyIDMyMC4wMDQgNTEySDM1Mi4wMDRDMzY5LjYwMyA1MTIgMzg0LjAwNCA0OTcuNiAzODQuMDA0IDQ4MFYzMTguMjE5QzQwNC41MTcgMjk3LjM1MiA0MTYuMDA5IDI2OS4yNiA0MTYuMDA0IDI0MEM0MTYuMDA0IDIzOS43NzkgNDE1LjkzMyAyMzkuNTggNDE1LjkyNCAyMzkuMzU5VjEzNi44ODlMNDMxLjkyNCAxNDRMNDUwLjgyNCAxODEuNjk5QzQ1OC4yNzMgMTk2LjU2MSA0NzUuODYxIDIwMy4yNCA0OTEuMjk5IDE5Ny4wNzZMNTIzLjg1OSAxODQuMDdDNTM2LjAzMyAxNzkuMjA5IDU0NC4wMTMgMTY3LjQxOCA1NDQuMDA0IDE1NC4zMDlMNTQzLjk0MyA3Ni42Wk00NzkuOTI0IDk2QzQ3MS4wODggOTYgNDYzLjkyNCA4OC44MzYgNDYzLjkyNCA4MEM0NjMuOTI0IDcxLjE2MiA0NzEuMDg4IDY0IDQ3OS45MjQgNjRTNDk1LjkyNCA3MS4xNjIgNDk1LjkyNCA4MEM0OTUuOTI0IDg4LjgzNiA0ODguNzU5IDk2IDQ3OS45MjQgOTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Alicorn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M64.364 215.74C54.074 223.266 47.995 235.252 48.003 248V304C48.003 312.837 40.839 320 32.002 320H16.001C7.164 320 0 312.837 0 304V248C0 199.399 39.401 160 88.005 160H88.455C74.578 175.467 66.121 195.035 64.364 215.74ZM632.036 32H531.96C528.896 35.188 525.442 37.976 521.68 40.3C526.79 45.68 531.59 50.77 535.37 54.8C540.904 60.708 543.973 68.505 543.951 76.6V83.34L636.446 46.65C640.119 44.194 641.105 39.226 638.649 35.553C637.172 33.344 634.694 32.012 632.036 32Z" />
            <path d="M543.943 76.6C543.961 68.502 540.884 60.705 535.343 54.799C531.564 50.799 526.763 45.68 521.654 40.299C532.715 33.459 541.154 22.809 543.834 9.639C544.689 5.254 541.828 1.006 537.443 0.148C536.935 0.051 536.42 0 535.904 0H415.904C346.674 0 288.004 64 288.004 128H287.924C224.006 128 183.724 91.221 160.265 37.732C156.955 30.188 146.666 30.021 143.15 37.471C133.17 58.617 127.998 81.713 128.004 105.1C128.004 172.1 179.004 241.35 256.004 256C159.134 256 117.254 182.699 102.613 147C60.113 178.697 51.353 238.846 83.05 281.348C86.465 285.926 90.281 290.189 94.453 294.09L68.824 362.477C64.269 374.633 63.515 387.885 66.664 400.48L88.349 487.77C91.914 502.01 104.711 512 119.39 512H152.375C173.185 512 188.459 492.447 183.424 472.256L162.193 386.859L186.003 323.27L288.004 345.58V480C288.004 497.672 302.33 512 320.004 512H352.004C369.603 512 384.004 497.6 384.004 480V318.219C404.517 297.352 416.009 269.26 416.004 240C416.004 239.779 415.933 239.58 415.924 239.359V136.889L431.924 144L450.824 181.699C458.273 196.561 475.861 203.24 491.299 197.076L523.859 184.07C536.033 179.209 544.013 167.418 544.004 154.309L543.943 76.6ZM479.924 96C471.088 96 463.924 88.836 463.924 80C463.924 71.162 471.088 64 479.924 64S495.924 71.162 495.924 80C495.924 88.836 488.759 96 479.924 96Z" />
        </Icon>
    </>
}