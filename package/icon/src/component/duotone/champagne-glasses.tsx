
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `champagne-glasses` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/champagne-glasses?s=duotone champagne-glasses}
 * @preview ![champagne-glasses](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYzOS4zNjMgNDMzLjYwNUM2MzMuMDQ1IDQxOC4yMzIgNjE4LjE4NSA0MDguOTA5IDYwMi41MiA0MDguOTA5QzU5Ny40MjUgNDA4LjkwOSA1OTIuMjQzIDQwOS44OTcgNTg3LjI0MiA0MTEuOTgyTDU2NS4xMTggNDIxLjIzMUw1MjYuMzcxIDMxOS4yNDVDNTc0LjI0MiAyODQuMjUgNTkxLjI0MSAyMTkuMDA5IDU2MC44NjggMTY2LjUxNkw0NzQuMjQ5IDE2LjAzN0M0NjguMzg2IDUuODcgNDU3LjY4NyAwIDQ0Ni40ODkgMEM0NDIuNDA1IC0wLjAwNCA0MzguMjU5IDAuNzc3IDQzNC4yNTEgMi40MTRMMzIwLjAwOSA0OS43ODJMMjA1Ljc2NiAyLjQxNEMyMDEuNzYxIDAuNzc3IDE5Ny42MSAwIDE5My41MjkgMEMxODIuMzI4IDAgMTcxLjYzMiA1Ljg3IDE2NS43NjkgMTYuMDM3TDc5LjE0OSAxNjYuNTE2QzQ4LjkwMSAyMTkuMDA5IDY1Ljc3NSAyODQuMjUgMTEzLjY0NyAzMTkuMjQ1TDc0LjkgNDIxLjEwNkw1Mi43NzYgNDExLjg1OEM0Ny43NzYgNDA5Ljc3MiA0Mi42MDEgNDA4Ljc4NCAzNy41MTMgNDA4Ljc4NEMyMS44NzggNDA4Ljc4NCA3LjA2OCA0MTguMTA3IDAuNjU0IDQzMy40OEMtMS4wOTYgNDM3LjYwNCAwLjc3OSA0NDIuMjI4IDQuOTA0IDQ0My45NzhMMTY3LjI2OSA1MTEuMzQ0QzE2OC4yODIgNTExLjc4OSAxNjkuMzM3IDUxMiAxNzAuMzc2IDUxMkMxNzMuNDI4IDUxMiAxNzYuMzM2IDUxMC4xNzIgMTc3LjY0MyA1MDcuMDk0QzE4Ni4wMTcgNDg2LjcyMiAxNzYuMzkzIDQ2My4yMjUgMTU2LjAxOSA0NTQuNzI3TDEzMy44OTYgNDQ1LjYwM0wxNzMuMjY4IDM0MS45OTJDMTc3Ljc2OCAzNDIuNDkyIDE4Mi4xNDMgMzQzLjI0MiAxODYuMzkyIDM0My4yNDJDMjM4LjEzOSAzNDMuMjQyIDI4NS43NjEgMzEwLjI0NiAyOTkuNzYgMjU4LjAwNEwzMjAuMDA5IDE4Mi42MzlMMzQwLjI1OCAyNTguMDA0QzM1NC4yNTcgMzEwLjI0NiA0MDEuODc5IDM0My4yNDIgNDUzLjYyNSAzNDMuMjQyQzQ1Ny44NzUgMzQzLjI0MiA0NjIuMjUgMzQyLjQ5MiA0NjYuNzQ5IDM0MS45OTJMNTA1Ljk5NyA0NDUuNjAzTDQ4My44NzMgNDU0LjcyN0M0NjMuNSA0NjMuMjI1IDQ1My43NSA0ODYuNzIyIDQ2Mi4yNSA1MDcuMDk0QzQ2My41NTYgNTEwLjE3MiA0NjYuNTMzIDUxMiA0NjkuNjIyIDUxMkM0NzAuNjczIDUxMiA0NzEuNzM1IDUxMS43ODkgNDcyLjc0OSA1MTEuMzQ0TDYzNS4xMTQgNDQzLjk3OEM2MzkuMTEzIDQ0Mi4yMjggNjQxLjExMyA0MzcuNzI5IDYzOS4zNjMgNDMzLjYwNVpNMjM3Ljk0NiAyNDEuNDQzQzIzMi42OTYgMjYxLjAzMSAyMTcuOTIgMjcyLjUwMiAyMDIuNzc0IDI3Ny4wMzZDMTkyLjEyNCAyODAuMjE5IDE2OS40NDQgMjgwLjc2NiAxNTEuNDE2IDI2Ny41ODhDMTI4LjY5MyAyNTAuOTc3IDEyMS40NjMgMjIxLjI1OSAxMzQuNjE1IDE5OC40MzhMMjA3LjIyNSA3Mi4yOTVMMjc1Ljc1NiAxMDAuNzA5TDIzNy45NDYgMjQxLjQ0M1pNNDg4LjY2OCAyNjcuNTg4QzQ3MC42NCAyODAuNzY2IDQ0Ny45NiAyODAuMjE5IDQzNy4zMSAyNzcuMDM2QzQyMi4xNjQgMjcyLjUwMiA0MDcuMzg4IDI2MS4wMzEgNDAyLjEzOCAyNDEuNDQzTDM2NC4zMjggMTAwLjcwOUw0MzIuODU5IDcyLjI5NUw1MDUuNDcgMTk4LjQzOEM1MTguNjIxIDIyMS4yNTkgNTExLjM5MSAyNTAuOTc3IDQ4OC42NjggMjY3LjU4OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjYxLjIyIDE1NC41MzNMMjM3Ljg3IDI0MS40NDNDMjMyLjYyMSAyNjEuMDMxIDIxNy44NDQgMjcyLjUwMiAyMDIuNjk5IDI3Ny4wMzZDMTkyLjA0OSAyODAuMjE5IDE2OS4zNjkgMjgwLjc2NiAxNTEuMzQxIDI2Ny41ODhDMTI4LjYxOCAyNTAuOTc3IDEyMS4zODggMjIxLjI1OSAxMzQuNTM5IDE5OC40MzhMMTc5LjM1MyAxMjAuNTg1TDI2MS4yMiAxNTQuNTMzWk01MDUuMzk0IDE5OC40MzhMNDYyLjAxNiAxMjMuMDgxTDM3OS40NjEgMTU3LjMxNEw0MDIuMDYzIDI0MS40NDNDNDA3LjMxMyAyNjEuMDMxIDQyMi4wODkgMjcyLjUwMiA0MzcuMjM1IDI3Ny4wMzZDNDQ3Ljg4NCAyODAuMjE5IDQ3MC41NjQgMjgwLjc2NiA0ODguNTkzIDI2Ny41ODhDNTExLjMxNiAyNTAuOTc3IDUxOC41NDYgMjIxLjI1OSA1MDUuMzk0IDE5OC40MzhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChampagneGlasses(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M639.363 433.605C633.045 418.232 618.185 408.909 602.52 408.909C597.425 408.909 592.243 409.897 587.242 411.982L565.118 421.231L526.371 319.245C574.242 284.25 591.241 219.009 560.868 166.516L474.249 16.037C468.386 5.87 457.687 0 446.489 0C442.405 -0.004 438.259 0.777 434.251 2.414L320.009 49.782L205.766 2.414C201.761 0.777 197.61 0 193.529 0C182.328 0 171.632 5.87 165.769 16.037L79.149 166.516C48.901 219.009 65.775 284.25 113.647 319.245L74.9 421.106L52.776 411.858C47.776 409.772 42.601 408.784 37.513 408.784C21.878 408.784 7.068 418.107 0.654 433.48C-1.096 437.604 0.779 442.228 4.904 443.978L167.269 511.344C168.282 511.789 169.337 512 170.376 512C173.428 512 176.336 510.172 177.643 507.094C186.017 486.722 176.393 463.225 156.019 454.727L133.896 445.603L173.268 341.992C177.768 342.492 182.143 343.242 186.392 343.242C238.139 343.242 285.761 310.246 299.76 258.004L320.009 182.639L340.258 258.004C354.257 310.246 401.879 343.242 453.625 343.242C457.875 343.242 462.25 342.492 466.749 341.992L505.997 445.603L483.873 454.727C463.5 463.225 453.75 486.722 462.25 507.094C463.556 510.172 466.533 512 469.622 512C470.673 512 471.735 511.789 472.749 511.344L635.114 443.978C639.113 442.228 641.113 437.729 639.363 433.605ZM237.946 241.443C232.696 261.031 217.92 272.502 202.774 277.036C192.124 280.219 169.444 280.766 151.416 267.588C128.693 250.977 121.463 221.259 134.615 198.438L207.225 72.295L275.756 100.709L237.946 241.443ZM488.668 267.588C470.64 280.766 447.96 280.219 437.31 277.036C422.164 272.502 407.388 261.031 402.138 241.443L364.328 100.709L432.859 72.295L505.47 198.438C518.621 221.259 511.391 250.977 488.668 267.588Z" />
            <path d="M261.22 154.533L237.87 241.443C232.621 261.031 217.844 272.502 202.699 277.036C192.049 280.219 169.369 280.766 151.341 267.588C128.618 250.977 121.388 221.259 134.539 198.438L179.353 120.585L261.22 154.533ZM505.394 198.438L462.016 123.081L379.461 157.314L402.063 241.443C407.313 261.031 422.089 272.502 437.235 277.036C447.884 280.219 470.564 280.766 488.593 267.588C511.316 250.977 518.546 221.259 505.394 198.438Z" />
        </Icon>
    </>
}