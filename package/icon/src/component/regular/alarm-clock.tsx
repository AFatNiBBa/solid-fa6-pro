
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `alarm-clock` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-clock?s=regular alarm-clock}
 * @preview ![alarm-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAwQzQyLjk4IDAgMCA0Mi45OCAwIDk2QzAgMTE0Ljk0OSA1LjY3MiAxMzIuNDk2IDE1LjE0OCAxNDcuMzc1TDE2MS4wNTcgMjUuNzg1QzE0My45MzIgOS45MTQgMTIxLjE5MSAwIDk2IDBaTTQxNiAwQzM5MC44MDkgMCAzNjguMDY4IDkuOTE0IDM1MC45NDMgMjUuNzg1TDQ5Ni44NTIgMTQ3LjM3NUM1MDYuMzI4IDEzMi40OTYgNTEyIDExNC45NDkgNTEyIDk2QzUxMiA0Mi45OCA0NjkuMDIgMCA0MTYgMFpNMjU2LjAxNCA2NEMxMzIuMzAzIDY0IDMyLjAxNCAxNjQuMjg5IDMyLjAxNCAyODhDMzIuMDE0IDM0MS4yMDcgNTAuNjQ2IDM5MC4wMTYgODEuNjM1IDQyOC40NDFMMzkuMDQ1IDQ3MS4wMzFDMzQuMzU3IDQ3NS43MTkgMzIuMDE0IDQ4MS44NTkgMzIuMDE0IDQ4OEMzMi4wMTQgNTAwLjc5IDQyLjMxMiA1MTIgNTYuMDE0IDUxMkM2Mi4xNTQgNTEyIDY4LjI5NSA1MDkuNjU2IDcyLjk4MiA1MDQuOTY5TDExNS41NzIgNDYyLjM3OUMxNTMuOTk4IDQ5My4zNjcgMjAyLjgwNyA1MTIgMjU2LjAxNCA1MTJTMzU4LjAyOSA0OTMuMzY3IDM5Ni40NTUgNDYyLjM3OUw0MzkuMDQ1IDUwNC45NjlDNDQzLjczMiA1MDkuNjU2IDQ0OS44NzMgNTEyIDQ1Ni4wMTQgNTEyQzQ2OS43MjMgNTEyIDQ4MC4wMTQgNTAwLjc5IDQ4MC4wMTQgNDg4QzQ4MC4wMTQgNDgxLjg1OSA0NzcuNjcgNDc1LjcxOSA0NzIuOTgyIDQ3MS4wMzFMNDMwLjM5MyA0MjguNDQxQzQ2MS4zODEgMzkwLjAxNiA0ODAuMDE0IDM0MS4yMDcgNDgwLjAxNCAyODhDNDgwLjAxNCAxNjQuMjg5IDM3OS43MjUgNjQgMjU2LjAxNCA2NFpNMjU2LjAxNCA0NjRDMTU4Ljk2NyA0NjQgODAuMDE0IDM4NS4wNDcgODAuMDE0IDI4OFMxNTguOTY3IDExMiAyNTYuMDE0IDExMlM0MzIuMDE0IDE5MC45NTMgNDMyLjAxNCAyODhTMzUzLjA2MSA0NjQgMjU2LjAxNCA0NjRaTTI4MC4wMTQgMjkyVjE4NEMyODAuMDE0IDE3MC43NSAyNjkuMjY0IDE2MCAyNTYuMDE0IDE2MFMyMzIuMDE0IDE3MC43NSAyMzIuMDE0IDE4NFYzMDRDMjMyLjAxNCAzMTEuNTYyIDIzNS41NzYgMzE4LjY1NiAyNDEuNjA3IDMyMy4xODhMMzA1LjYwNyAzNzEuMTg4QzMwOS45MzYgMzc0LjQzOCAzMTQuOTgyIDM3NiAzMTkuOTk4IDM3NkMzMzMuMTk2IDM3NiAzNDQuMDE2IDM2NS4zMzYgMzQ0LjAxNiAzNTIuMDE3QzM0NC4wMTYgMzQ0LjcyIDM0MC43MDEgMzM3LjUxOSAzMzQuNDIgMzMyLjgxM0wyODAuMDE0IDI5MlogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function AlarmClock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M96 0C42.98 0 0 42.98 0 96C0 114.949 5.672 132.496 15.148 147.375L161.057 25.785C143.932 9.914 121.191 0 96 0ZM416 0C390.809 0 368.068 9.914 350.943 25.785L496.852 147.375C506.328 132.496 512 114.949 512 96C512 42.98 469.02 0 416 0ZM256.014 64C132.303 64 32.014 164.289 32.014 288C32.014 341.207 50.646 390.016 81.635 428.441L39.045 471.031C34.357 475.719 32.014 481.859 32.014 488C32.014 500.79 42.312 512 56.014 512C62.154 512 68.295 509.656 72.982 504.969L115.572 462.379C153.998 493.367 202.807 512 256.014 512S358.029 493.367 396.455 462.379L439.045 504.969C443.732 509.656 449.873 512 456.014 512C469.723 512 480.014 500.79 480.014 488C480.014 481.859 477.67 475.719 472.982 471.031L430.393 428.441C461.381 390.016 480.014 341.207 480.014 288C480.014 164.289 379.725 64 256.014 64ZM256.014 464C158.967 464 80.014 385.047 80.014 288S158.967 112 256.014 112S432.014 190.953 432.014 288S353.061 464 256.014 464ZM280.014 292V184C280.014 170.75 269.264 160 256.014 160S232.014 170.75 232.014 184V304C232.014 311.562 235.576 318.656 241.607 323.188L305.607 371.188C309.936 374.438 314.982 376 319.998 376C333.196 376 344.016 365.336 344.016 352.017C344.016 344.72 340.701 337.519 334.42 332.813L280.014 292Z " />
        </Icon>
    </>
}