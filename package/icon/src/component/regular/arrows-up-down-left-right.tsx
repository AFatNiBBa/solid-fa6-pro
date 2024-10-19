
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrows-up-down-left-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down-left-right?s=regular arrows-up-down-left-right}
 * @preview ![arrows-up-down-left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjU1LjgyOEM1MTIgMjYyLjU4MyA1MDkuMTU2IDI2OS4wNTYgNTA0LjE1NiAyNzMuNTlMNDE2LjE1NiAzNTMuNjQ0QzQxMS41MzEgMzU3LjgzNCA0MDUuNzgxIDM1OS44OTggNDAwIDM1OS44OThDMzg2LjcyOCAzNTkuODk4IDM3NiAzNDkuMTM1IDM3NiAzMzUuODk3QzM3NiAzMjkuMzYzIDM3OC42NDcgMzIyLjg1NSAzODMuODQ0IDMxOC4xMkw0MjUuOTE0IDI3OS44NDRIMjgwVjQyNS44NTZMMzE4LjI1IDM4My43NThDMzIyLjk2NSAzNzguNTU4IDMyOS40NjIgMzc1LjkwOCAzMzUuOTkyIDM3NS45MDhDMzQ5LjIyIDM3NS45MDggMzYwIDM4Ni42MTYgMzYwIDM5OS45NEMzNjAgNDA1LjcwNSAzNTcuOTM5IDQxMS40ODkgMzUzLjc1IDQxNi4wOTJMMjczLjc1IDUwNC4xNTFDMjY5LjIxOSA1MDkuMTU0IDI2Mi43NSA1MTIgMjU2IDUxMlMyNDIuNzgxIDUwOS4xNTQgMjM4LjI1IDUwNC4xNTFMMTU4LjI1IDQxNi4wOTJDMTU0LjA2MSA0MTEuNDg5IDE1MiA0MDUuNzA1IDE1MiAzOTkuOTRDMTUyIDM4Ni41NjUgMTYyLjgzMiAzNzUuOTA4IDE3NS45OTcgMzc1LjkwOEMxODIuNTIzIDM3NS45MDggMTg5LjAxOCAzNzguNTU4IDE5My43NSAzODMuNzU4TDIzMiA0MjUuODU2VjI3OS44NDRIODYuMDg2TDEyOC4xNTYgMzE4LjEyQzEzMy4zNTMgMzIyLjg1NSAxMzYgMzI5LjM2MyAxMzYgMzM1Ljg5N0MxMzYgMzQ5LjExNyAxMjUuMjkxIDM1OS44OTggMTEyIDM1OS44OThDMTA2LjIxOSAzNTkuODk4IDEwMC40NjkgMzU3LjgzNCA5NS44NDQgMzUzLjY0NEw3Ljg0NCAyNzMuNTlDMi44NDQgMjY5LjA1NiAwIDI2Mi41ODMgMCAyNTUuODI4QzAgMjQ5LjA3MyAyLjg0NCAyNDIuNiA3Ljg0NCAyMzguMDY2TDk1Ljg0NCAxNTguMDEyQzEwMC40NjEgMTUzLjgzMiAxMDYuMjQ4IDE1MS43NyAxMTIuMDEgMTUxLjc3QzEyNS4yNzQgMTUxLjc3IDEzNiAxNjIuNTE1IDEzNiAxNzUuNzU5QzEzNiAxODIuMjkzIDEzMy4zNTMgMTg4LjgwMSAxMjguMTU2IDE5My41MzZMODYuMDg2IDIzMS44MTJIMjMyVjg1LjhMMTkzLjc1IDEyNy44OThDMTg5LjAxOCAxMzMuMDk4IDE4Mi41MjMgMTM1Ljc0OCAxNzUuOTk3IDEzNS43NDhDMTYyLjgzMiAxMzUuNzQ4IDE1MiAxMjUuMDkyIDE1MiAxMTEuNzE2QzE1MiAxMDUuOTUxIDE1NC4wNjEgMTAwLjE2NyAxNTguMjUgOTUuNTY0TDIzOC4yNSA3LjUwNUMyNDIuNzgxIDIuNTAyIDI0OS4zOTEgMCAyNTYgMFMyNjkuMjE5IDIuNTAyIDI3My43NSA3LjUwNUwzNTMuNzUgOTUuNTY0QzM1Ny45MzkgMTAwLjE2NyAzNjAgMTA1Ljk1MSAzNjAgMTExLjcxNkMzNjAgMTI1LjA2NSAzNDkuMTkxIDEzNS43NDcgMzM2IDEzNS43NDdDMzI5LjQ2OSAxMzUuNzQ3IDMyMi45NjkgMTMzLjA4OSAzMTguMjUgMTI3Ljg5OEwyODAgODUuOFYyMzEuODEySDQyNS45MTRMMzgzLjg0NCAxOTMuNTM2QzM3OC42NDcgMTg4LjgwMSAzNzYgMTgyLjI5MyAzNzYgMTc1Ljc1OUMzNzYgMTYyLjUwNSAzODYuNzM5IDE1MS43NyAzOTkuOTc3IDE1MS43N0M0MDUuNzM2IDE1MS43NyA0MTEuNTI0IDE1My44MzIgNDE2LjE1NiAxNTguMDEyTDUwNC4xNTYgMjM4LjA2NkM1MDkuMTU2IDI0Mi42IDUxMiAyNDkuMDczIDUxMiAyNTUuODI4WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowsUpDownLeftRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 255.828C512 262.583 509.156 269.056 504.156 273.59L416.156 353.644C411.531 357.834 405.781 359.898 400 359.898C386.728 359.898 376 349.135 376 335.897C376 329.363 378.647 322.855 383.844 318.12L425.914 279.844H280V425.856L318.25 383.758C322.965 378.558 329.462 375.908 335.992 375.908C349.22 375.908 360 386.616 360 399.94C360 405.705 357.939 411.489 353.75 416.092L273.75 504.151C269.219 509.154 262.75 512 256 512S242.781 509.154 238.25 504.151L158.25 416.092C154.061 411.489 152 405.705 152 399.94C152 386.565 162.832 375.908 175.997 375.908C182.523 375.908 189.018 378.558 193.75 383.758L232 425.856V279.844H86.086L128.156 318.12C133.353 322.855 136 329.363 136 335.897C136 349.117 125.291 359.898 112 359.898C106.219 359.898 100.469 357.834 95.844 353.644L7.844 273.59C2.844 269.056 0 262.583 0 255.828C0 249.073 2.844 242.6 7.844 238.066L95.844 158.012C100.461 153.832 106.248 151.77 112.01 151.77C125.274 151.77 136 162.515 136 175.759C136 182.293 133.353 188.801 128.156 193.536L86.086 231.812H232V85.8L193.75 127.898C189.018 133.098 182.523 135.748 175.997 135.748C162.832 135.748 152 125.092 152 111.716C152 105.951 154.061 100.167 158.25 95.564L238.25 7.505C242.781 2.502 249.391 0 256 0S269.219 2.502 273.75 7.505L353.75 95.564C357.939 100.167 360 105.951 360 111.716C360 125.065 349.191 135.747 336 135.747C329.469 135.747 322.969 133.089 318.25 127.898L280 85.8V231.812H425.914L383.844 193.536C378.647 188.801 376 182.293 376 175.759C376 162.505 386.739 151.77 399.977 151.77C405.736 151.77 411.524 153.832 416.156 158.012L504.156 238.066C509.156 242.6 512 249.073 512 255.828Z " />
        </Icon>
    </>
}