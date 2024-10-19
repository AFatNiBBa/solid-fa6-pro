
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `vacuum` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=thin vacuum}
 * @preview ![vacuum](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMzUyQzMyMy44MTggMzUyIDI4OCAzODcuODE2IDI4OCA0MzJTMzIzLjgxOCA1MTIgMzY4IDUxMkM0MTIuMTg0IDUxMiA0NDggNDc2LjE4NCA0NDggNDMyUzQxMi4xODQgMzUyIDM2OCAzNTJaTTM2OCA0OTZDMzMyLjcxMSA0OTYgMzA0IDQ2Ny4yODkgMzA0IDQzMlMzMzIuNzExIDM2OCAzNjggMzY4QzQwMy4yOTEgMzY4IDQzMiAzOTYuNzExIDQzMiA0MzJTNDAzLjI5MSA0OTYgMzY4IDQ5NlpNNjQwIDExMkM2NDAgNTAuMjUgNTg5Ljc1IDAgNTI4IDBIMzM0LjY3MkMyNzAuNDM4IDAgMjE1Ljg0NCA0My43ODEgMjAxLjkwNiAxMDYuNDY5TDEyOS41NzYgNDMySDU2QzI1LjEyNSA0MzIgMCA0NTcuMTI1IDAgNDg4QzAgNTAxLjIxOSAxMC43NjYgNTEyIDI0IDUxMkgxNzZDMTg5LjIzNCA1MTIgMjAwIDUwMS4yMTkgMjAwIDQ4OFY0NTZDMjAwIDQ0Mi43ODEgMTg5LjIzNCA0MzIgMTc2IDQzMkgxNDUuOTc5TDIxNy41MzEgMTA5Ljk2OUMyMjkuODI4IDU0LjYyNSAyNzggMTYgMzM0LjY3MiAxNkg1MjhDNTgwLjkzOCAxNiA2MjQgNTkuMDYyIDYyNCAxMTJDNjI0IDE1Ni44MDcgNTkyLjU4NCAxOTUuNzA1IDU0OS4xMDQgMjA1LjUxMkM1MTkuMTg5IDE1OS4wMjcgNDY3LjI3IDEyOCA0MDggMTI4SDM5MkMzNjkuOTM4IDEyOCAzNTIgMTQ1LjkzOCAzNTIgMTY4VjMyMEMzNTIgMzI0LjQwNiAzNTUuNTc4IDMyOCAzNjAgMzI4UzM2OCAzMjQuNDA2IDM2OCAzMjBWMTY4QzM2OCAxNTQuNzgxIDM3OC43NjYgMTQ0IDM5MiAxNDRINDA4QzQ5MS44MTIgMTQ0IDU2MCAyMTIuMTg4IDU2MCAyOTZWNDcyQzU2MCA0ODUuMjE5IDU0OS4yMzQgNDk2IDUzNiA0OTZINDQ4QzQ0My41NzggNDk2IDQ0MCA0OTkuNTk0IDQ0MCA1MDRTNDQzLjU3OCA1MTIgNDQ4IDUxMkg1MzZDNTU4LjA2MiA1MTIgNTc2IDQ5NC4wNjIgNTc2IDQ3MlYyOTZDNTc2IDI2OC40NDcgNTY4LjY5NyAyNDIuODA5IDU1Ni44ODkgMjE5LjgzOEM2MDUuMzQyIDIwNi44NDQgNjQwIDE2Mi43NzMgNjQwIDExMlpNMTc2IDQ0OEMxODAuNDA2IDQ0OCAxODQgNDUxLjU5NCAxODQgNDU2VjQ4OEMxODQgNDkyLjQwNiAxODAuNDA2IDQ5NiAxNzYgNDk2SDI0QzE5LjU5NCA0OTYgMTYgNDkyLjQwNiAxNiA0ODhDMTYgNDY1LjkzOCAzMy45MzggNDQ4IDU2IDQ0OEgxNzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Vacuum(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M368 352C323.818 352 288 387.816 288 432S323.818 512 368 512C412.184 512 448 476.184 448 432S412.184 352 368 352ZM368 496C332.711 496 304 467.289 304 432S332.711 368 368 368C403.291 368 432 396.711 432 432S403.291 496 368 496ZM640 112C640 50.25 589.75 0 528 0H334.672C270.438 0 215.844 43.781 201.906 106.469L129.576 432H56C25.125 432 0 457.125 0 488C0 501.219 10.766 512 24 512H176C189.234 512 200 501.219 200 488V456C200 442.781 189.234 432 176 432H145.979L217.531 109.969C229.828 54.625 278 16 334.672 16H528C580.938 16 624 59.062 624 112C624 156.807 592.584 195.705 549.104 205.512C519.189 159.027 467.27 128 408 128H392C369.938 128 352 145.938 352 168V320C352 324.406 355.578 328 360 328S368 324.406 368 320V168C368 154.781 378.766 144 392 144H408C491.812 144 560 212.188 560 296V472C560 485.219 549.234 496 536 496H448C443.578 496 440 499.594 440 504S443.578 512 448 512H536C558.062 512 576 494.062 576 472V296C576 268.447 568.697 242.809 556.889 219.838C605.342 206.844 640 162.773 640 112ZM176 448C180.406 448 184 451.594 184 456V488C184 492.406 180.406 496 176 496H24C19.594 496 16 492.406 16 488C16 465.938 33.938 448 56 448H176Z" />
        </Icon>
    </>
}