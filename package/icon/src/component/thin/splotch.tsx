
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `splotch` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/splotch?s=thin splotch}
 * @preview ![splotch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzIuMjMzIDE5NS45MDhMNDA1LjIzMyAxNzMuMDMxQzM4NS45ODMgMTY2LjQwNiAzNzEuNzMzIDE1Mi4wMzEgMzY3LjEwOCAxMzQuNjU0TDM1MS4xMDggNzQuMjc1QzM0My45OTUgNDcuNDI4IDMxNi45MDEgMzIgMjg5LjI5NCAzMkMyNzEuNzgyIDMyIDI1NC4wNjMgMzguMjA5IDI0MS4xMDggNTEuNjQ4TDE5NC45ODMgOTkuMjc3QzE4Mi45NzcgMTExLjczNiAxNjUuMjI3IDExOC43NTYgMTQ2LjU2MSAxMTguNzU2QzE0NC42MjggMTE4Ljc1NiAxNDIuNjgyIDExOC42ODIgMTQwLjczMyAxMTguNTI5TDY4Ljg1OCAxMTIuOTAyQzY2Ljg0MiAxMTIuNzQ4IDY0Ljg1OCAxMTIuNjcyIDYyLjg5NyAxMTIuNjcyQzE0LjI1NSAxMTIuNjcyIC0xNi45MzUgMTU5LjI1NCA5Ljg1OCAxOTUuNzgzTDQ4LjM1OCAyNDguMTYyQzU5LjQ4MyAyNjMuMjg5IDYxLjIzMyAyODIuMDQxIDUyLjk4MyAyOTguNDE2TDI0LjYwOCAzNTUuNDJDNi4xODIgMzkyLjI3NyAzOC45MzIgNDMxLjAyNSA4Mi4yMjcgNDMxLjAyNUM4Ny4zOTEgNDMxLjAyNSA5Mi43MTQgNDMwLjQ3MyA5OC4xMDggNDI5LjMwMUwxNjguMTA4IDQxMy45MjRDMTczLjIxMiA0MTIuODA5IDE3OC40MDMgNDEyLjI2MiAxODMuNTY1IDQxMi4yNjJDMTk4LjYzOSA0MTIuMjYyIDIxMy40NjkgNDE2LjkyMiAyMjUuMTA4IDQyNS42NzZMMjc5LjQ4MyA0NjYuNTUzQzI5MS44MDcgNDc1LjgxNiAzMDYuMzQgNDgwIDMyMC41OTYgNDgwQzM1MS43NDcgNDgwIDM4MS41NDQgNDYwLjAwMiAzODMuODU4IDQyOS4zMDFMMzg4LjYwOCAzNjcuNDIyQzM4OS45ODMgMzQ5LjY3IDQwMS4zNTggMzMzLjU0MyA0MTkuMjMzIDMyNC40MThMNDgxLjIzMyAyOTIuNjY2QzUyNi4xMDggMjY5Ljc4OSA1MjAuODU4IDIxMi41MzUgNDcyLjIzMyAxOTUuOTA4Wk00NzMuOTQgMjc4LjQyNEw0MTEuOTU4IDMxMC4xNjhDMzg5LjE2NSAzMjEuODA1IDM3NC40NzEgMzQyLjc0NiAzNzIuNjU1IDM2Ni4xOTdMMzY3LjkwNSA0MjguMDk4QzM2Ni4yMSA0NTAuNTcgMzQyLjUyIDQ2NCAzMjAuNTk2IDQ2NEMzMDguODk5IDQ2NCAyOTguMDA2IDQ2MC40NjEgMjg5LjA5OCA0NTMuNzY0TDIzNC43MjUgNDEyLjg4N0MyMjAuNDY5IDQwMi4xNjYgMjAyLjI5OSAzOTYuMjYyIDE4My41NjUgMzk2LjI2MkMxNzcuMjA2IDM5Ni4yNjIgMTcwLjg1NiAzOTYuOTQ1IDE2NC42NzYgMzk4LjI5N0w5NC43MSA0MTMuNjY2QzkwLjU1OSA0MTQuNTY4IDg2LjM2IDQxNS4wMjUgODIuMjI3IDQxNS4wMjVDNjQuODI5IDQxNS4wMjUgNDguMzY4IDQwNi41OCA0MC4yOSAzOTMuNTEyQzM2LjA0NCAzODYuNjQxIDMyLjM2IDM3NS42OTcgMzguOTMyIDM2Mi41NTFMNjcuMjcyIDMwNS42MTVDNzguMjcgMjgzLjc4NSA3Ni4wMTggMjU4Ljc2NCA2MS4yNTEgMjM4LjY4NkwyMi43NiAxODYuMzJDMTIuMzI1IDE3Mi4wOTYgMTYuMjY2IDE1OS4xMTkgMTkuNTQ0IDE1Mi42NDhDMjYuOTI0IDEzOC4wODQgNDMuOTQgMTI4LjY3MiA2Mi44OTcgMTI4LjY3MkM2NC40NTQgMTI4LjY3MiA2Ni4wMyAxMjguNzMyIDY3LjYxIDEyOC44NTRMMTM5LjQ4MyAxMzQuNDc5QzE0MS44NDggMTM0LjY2NCAxNDQuMjE0IDEzNC43NTYgMTQ2LjU2MSAxMzQuNzU2QzE2OS43MjkgMTM0Ljc1NiAxOTEuNTc3IDEyNS44NzEgMjA2LjQ3NyAxMTAuNDA4TDI1Mi42MyA2Mi43NTJDMjYxLjc5OCA1My4yNCAyNzQuODE3IDQ4IDI4OS4yOTYgNDhDMzA3Ljc0MyA0OCAzMzAuMTE0IDU3LjUwNCAzMzUuNjQzIDc4LjM3M0wzNTEuNjQ3IDEzOC43N0MzNTcuNjUzIDE2MS4zMzggMzc1LjczOSAxNzkuODAzIDQwMC4wNjMgMTg4LjE3NEw0NjcuMDU3IDIxMS4wNDlDNDg0LjA3MyAyMTYuODY3IDQ5NC44NjIgMjI5LjIxOSA0OTUuOTE5IDI0NC4wOTRDNDk2LjkxMyAyNTguMDY4IDQ4OC43MDYgMjcwLjg5NiA0NzMuOTQgMjc4LjQyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Splotch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M472.233 195.908L405.233 173.031C385.983 166.406 371.733 152.031 367.108 134.654L351.108 74.275C343.995 47.428 316.901 32 289.294 32C271.782 32 254.063 38.209 241.108 51.648L194.983 99.277C182.977 111.736 165.227 118.756 146.561 118.756C144.628 118.756 142.682 118.682 140.733 118.529L68.858 112.902C66.842 112.748 64.858 112.672 62.897 112.672C14.255 112.672 -16.935 159.254 9.858 195.783L48.358 248.162C59.483 263.289 61.233 282.041 52.983 298.416L24.608 355.42C6.182 392.277 38.932 431.025 82.227 431.025C87.391 431.025 92.714 430.473 98.108 429.301L168.108 413.924C173.212 412.809 178.403 412.262 183.565 412.262C198.639 412.262 213.469 416.922 225.108 425.676L279.483 466.553C291.807 475.816 306.34 480 320.596 480C351.747 480 381.544 460.002 383.858 429.301L388.608 367.422C389.983 349.67 401.358 333.543 419.233 324.418L481.233 292.666C526.108 269.789 520.858 212.535 472.233 195.908ZM473.94 278.424L411.958 310.168C389.165 321.805 374.471 342.746 372.655 366.197L367.905 428.098C366.21 450.57 342.52 464 320.596 464C308.899 464 298.006 460.461 289.098 453.764L234.725 412.887C220.469 402.166 202.299 396.262 183.565 396.262C177.206 396.262 170.856 396.945 164.676 398.297L94.71 413.666C90.559 414.568 86.36 415.025 82.227 415.025C64.829 415.025 48.368 406.58 40.29 393.512C36.044 386.641 32.36 375.697 38.932 362.551L67.272 305.615C78.27 283.785 76.018 258.764 61.251 238.686L22.76 186.32C12.325 172.096 16.266 159.119 19.544 152.648C26.924 138.084 43.94 128.672 62.897 128.672C64.454 128.672 66.03 128.732 67.61 128.854L139.483 134.479C141.848 134.664 144.214 134.756 146.561 134.756C169.729 134.756 191.577 125.871 206.477 110.408L252.63 62.752C261.798 53.24 274.817 48 289.296 48C307.743 48 330.114 57.504 335.643 78.373L351.647 138.77C357.653 161.338 375.739 179.803 400.063 188.174L467.057 211.049C484.073 216.867 494.862 229.219 495.919 244.094C496.913 258.068 488.706 270.896 473.94 278.424Z" />
        </Icon>
    </>
}