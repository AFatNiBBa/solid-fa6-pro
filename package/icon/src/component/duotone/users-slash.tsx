
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `users-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/users-slash?s=duotone users-slash}
 * @preview ![users-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwOCA4MEMyMDggMzUuODE4IDE3Mi4xODQgMCAxMjggMEMxMDMuODI4IDAgODIuNTIxIDEwLjk3MyA2Ny45NTkgMjcuOTUxTDE5My4xMjMgMTI2LjA1M0MyMDIuNDM4IDExMy4wNzQgMjA4IDk3LjI0IDIwOCA4MFpNNDIzLjgxNCAyMTZDNDIzLjgxNCAxNTguNTYyIDM3Ny4yNzMgMTEyIDMxOS44NTkgMTEyQzI4My45MjggMTEyIDI1Mi43ODkgMTMwLjUyNyAyMzQuMjcgMTU4LjMwM0wzOTYuNTY2IDI4NS41MDZDNDEzLjM3OSAyNjcuMTUgNDIzLjgxNCAyNDIuOTA2IDQyMy44MTQgMjE2Wk01MTIgMTYwQzU1Ni4xODQgMTYwIDU5MiAxMjQuMTgyIDU5MiA4MFM1NTYuMTg0IDAgNTEyIDBDNDY3LjgyIDAgNDMyIDM1LjgxOCA0MzIgODBTNDY3LjgyIDE2MCA1MTIgMTYwWk0yNzAuMTEzIDM1MkMxOTEuNjMxIDM1MiAxMjggNDExLjY5MyAxMjggNDg1LjMzMkMxMjggNTAwLjA1OSAxNDAuNzI3IDUxMiAxNTYuNDIyIDUxMkg0ODMuNTc4QzQ5NS4xOTcgNTEyIDUwNS4xMjEgNTA1LjQxNiA1MDkuNTI3IDQ5Ni4wNDFMMzI1Ljc0OCAzNTJIMjcwLjExM1pNMTg2Ljk2OSAyNDMuMjI3TDEyMS42MDcgMTkySDg4LjA4QzM5LjQzOCAxOTIgMCAyMzMuNzg1IDAgMjg1LjMzMkMwIDI5NS42NDEgNy44ODcgMzA0IDE3LjYxNSAzMDRIMjE3LjA3QzIwMi4zNTcgMjg2LjgyOCAxOTEuODEyIDI2Ni4wNzYgMTg2Ljk2OSAyNDMuMjI3Wk01NTEuOTIgMTkySDQ5MC4wOEM0NzcuMjc5IDE5MiA0NjUuMTk1IDE5NS4wMzcgNDU0LjIyMSAyMDAuMjRDNDU0LjgzNCAyMDUuNDc1IDQ1NS44MTQgMjEwLjYwNCA0NTUuODE0IDIxNkM0NTUuODE0IDI0OS43MTUgNDQzLjAzMyAyODAuMjExIDQyMi42NSAzMDRINjIyLjM4NUM2MzIuMTEzIDMwNCA2NDAgMjk1LjY0MSA2NDAgMjg1LjMzMkM2NDAgMjMzLjc4NSA2MDAuNTY2IDE5MiA1NTEuOTIgMTkyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MzQuODcyIDUwMi44MDVDNjI2Ljc0NyA1MTMuMjExIDYxMS42ODUgNTE1LjA4NiA2MDEuMTg1IDUwNi44ODNMOS4xODkgNDIuODg5Qy0xLjI0OSAzNC43MTcgLTMuMDYxIDE5LjYyNSA1LjEyNiA5LjE4OEM5Ljg0NSAzLjE1NiAxNi45MDcgMCAyNC4wMzIgMEMyOS4xODkgMCAzNC40MDcgMS42NzIgMzguODE0IDUuMTA5TDYzMC44MSA0NjkuMTAyQzY0MS4yNDcgNDc3LjI3MyA2NDMuMDYgNDkyLjM2NyA2MzQuODcyIDUwMi44MDVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UsersSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M208 80C208 35.818 172.184 0 128 0C103.828 0 82.521 10.973 67.959 27.951L193.123 126.053C202.438 113.074 208 97.24 208 80ZM423.814 216C423.814 158.562 377.273 112 319.859 112C283.928 112 252.789 130.527 234.27 158.303L396.566 285.506C413.379 267.15 423.814 242.906 423.814 216ZM512 160C556.184 160 592 124.182 592 80S556.184 0 512 0C467.82 0 432 35.818 432 80S467.82 160 512 160ZM270.113 352C191.631 352 128 411.693 128 485.332C128 500.059 140.727 512 156.422 512H483.578C495.197 512 505.121 505.416 509.527 496.041L325.748 352H270.113ZM186.969 243.227L121.607 192H88.08C39.438 192 0 233.785 0 285.332C0 295.641 7.887 304 17.615 304H217.07C202.357 286.828 191.812 266.076 186.969 243.227ZM551.92 192H490.08C477.279 192 465.195 195.037 454.221 200.24C454.834 205.475 455.814 210.604 455.814 216C455.814 249.715 443.033 280.211 422.65 304H622.385C632.113 304 640 295.641 640 285.332C640 233.785 600.566 192 551.92 192Z" />
            <path d="M634.872 502.805C626.747 513.211 611.685 515.086 601.185 506.883L9.189 42.889C-1.249 34.717 -3.061 19.625 5.126 9.188C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.81 469.102C641.247 477.273 643.06 492.367 634.872 502.805Z" />
        </Icon>
    </>
}