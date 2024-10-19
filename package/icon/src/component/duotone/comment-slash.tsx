
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-slash?s=duotone comment-slash}
 * @preview ![comment-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDIzOS45OTdDNjQgMjg5LjU5IDg1LjQwNiAzMzQuOTk2IDEyMSAzNzAuNjk5QzEwOC41IDQyMS4wODkgNjYuNjg4IDQ2NS45OTQgNjYuMTg4IDQ2Ni40OTRDNjQgNDY4Ljc5MSA2My40MDYgNDcyLjE5NyA2NC42ODggNDc1LjE5N0M2NiA0NzguMTk3IDY4LjgxMiA0NzkuOTk0IDcyIDQ3OS45OTRDMTM4LjMxMiA0NzkuOTk0IDE4OCA0NDguMTk4IDIxMi41OTQgNDI4LjU4OUMyNDUuMzEyIDQ0MC45MDEgMjgxLjU5NCA0NDcuOTk1IDMyMCA0NDcuOTk1QzM1Ny4zOTEgNDQ3Ljk5NSAzOTIuODAxIDQ0MS4zMzEgNDI0LjgyIDQyOS42MzJMODIuOTI2IDE2MS42NjJDNzAuODA5IDE4NS44NTMgNjQgMjEyLjI2MyA2NCAyMzkuOTk3Wk0zMjAgMzJDMjUyLjI2MiAzMiAxOTAuODU0IDUzLjUxNSAxNDUuMDcgODguNDA1TDUxMi43NjIgMzc2LjU5N0M1NTIuMDMzIDM0MC4wNDMgNTc2IDI5Mi4zNDggNTc2IDIzOS45OTdDNTc2IDEyNS4wOTIgNDYxLjQwNiAzMiAzMjAgMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYwMS4xODcgNTA2Ljg3NEw5LjE4NyA0Mi44NzlDLTEuMjM1IDM0LjcyMyAtMy4wNjMgMTkuNjMgNS4xMDkgOS4xOTJDMTMuMjk2IC0xLjIxNCAyOC4zNDMgLTMuMDg5IDM4LjgxMiA1LjEzTDYzMC44MTIgNDY5LjEyNEM2NDEuMjM0IDQ3Ny4yOCA2NDMuMDYyIDQ5Mi4zNzQgNjM0Ljg5IDUwMi44MTFDNjI2LjcwNiA1MTMuMjM2IDYxMS41OTkgNTE1LjA3MSA2MDEuMTg3IDUwNi44NzRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M64 239.997C64 289.59 85.406 334.996 121 370.699C108.5 421.089 66.688 465.994 66.188 466.494C64 468.791 63.406 472.197 64.688 475.197C66 478.197 68.812 479.994 72 479.994C138.312 479.994 188 448.198 212.594 428.589C245.312 440.901 281.594 447.995 320 447.995C357.391 447.995 392.801 441.331 424.82 429.632L82.926 161.662C70.809 185.853 64 212.263 64 239.997ZM320 32C252.262 32 190.854 53.515 145.07 88.405L512.762 376.597C552.033 340.043 576 292.348 576 239.997C576 125.092 461.406 32 320 32Z" />
            <path d="M601.187 506.874L9.187 42.879C-1.235 34.723 -3.063 19.63 5.109 9.192C13.296 -1.214 28.343 -3.089 38.812 5.13L630.812 469.124C641.234 477.28 643.062 492.374 634.89 502.811C626.706 513.236 611.599 515.071 601.187 506.874Z" />
        </Icon>
    </>
}