
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `brake-warning` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=thin brake-warning}
 * @preview ![brake-warning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAuMDIgMzIwQzMyNC40MjYgMzIwIDMyOC4wMiAzMTYuNDA2IDMyOC4wMiAzMTJWMTM2QzMyOC4wMiAxMzEuNTk0IDMyNC40MjYgMTI4IDMyMC4wMiAxMjhTMzEyLjAyIDEzMS41OTQgMzEyLjAyIDEzNlYzMTJDMzEyLjAyIDMxNi40MDYgMzE1LjYxMyAzMjAgMzIwLjAyIDMyMFpNMzIwLjA4MiAzNTJDMzExLjI1OCAzNTIgMzA0LjA4MiAzNTkuMTc4IDMwNC4wODIgMzY4UzMxMS4yNTggMzg0IDMyMC4wODIgMzg0UzMzNi4wODIgMzc2LjgyMiAzMzYuMDgyIDM2OFMzMjguOTA2IDM1MiAzMjAuMDgyIDM1MlpNMzIwIDMyQzE5Ni4yODUgMzIgOTYgMTMyLjM0MiA5NiAyNTZDOTYgMzc5Ljc0MiAxOTYuMjg1IDQ4MCAzMjAgNDgwUzU0NCAzNzkuNzQyIDU0NCAyNTZDNTQ0IDEzMi4zNDIgNDQzLjcxNSAzMiAzMjAgMzJaTTMyMCA0NjRDMjA1LjMwOSA0NjQgMTEyIDM3MC42OTEgMTEyIDI1NlMyMDUuMzA5IDQ4IDMyMCA0OFM1MjggMTQxLjMwOSA1MjggMjU2UzQzNC42OTEgNDY0IDMyMCA0NjRaTTc5IDU3LjY4OEM3NS41IDU1IDcwLjQ2OSA1NS41OTQgNjcuNzUgNTkuMDYyQzIzLjQzOCAxMTUuNzUgMCAxODMuODQ0IDAgMjU2UzIzLjQzOCAzOTYuMjUgNjcuNzUgNDUyLjkzOEM2OS4zNDQgNDU0LjkzOCA3MS42ODggNDU2IDc0LjA2MiA0NTZDNzUuNzgxIDQ1NiA3Ny41MzEgNDU1LjQzOCA3OSA0NTQuMzEyQzgyLjQ2OSA0NTEuNTk0IDgzLjA5NCA0NDYuNTYyIDgwLjM3NSA0NDMuMDYyQzM4LjI1IDM4OS4yNSAxNiAzMjQuNTYyIDE2IDI1NlMzOC4yNSAxMjIuNzUgODAuMzc1IDY4LjkzOEM4My4wOTQgNjUuNDM4IDgyLjQ2OSA2MC40MDYgNzkgNTcuNjg4Wk01NzIuMjUgNTkuMDYyQzU2OS41IDU1LjU5NCA1NjQuNDY5IDU1IDU2MSA1Ny42ODhDNTU3LjUzMSA2MC40MDYgNTU2LjkwNiA2NS40MzggNTU5LjYyNSA2OC45MzhDNjAxLjc1IDEyMi43NSA2MjQgMTg3LjQzOCA2MjQgMjU2UzYwMS43NSAzODkuMjUgNTU5LjYyNSA0NDMuMDYyQzU1Ni45MDYgNDQ2LjU2MiA1NTcuNTMxIDQ1MS41OTQgNTYxIDQ1NC4zMTJDNTYyLjQ2OSA0NTUuNDM4IDU2NC4yMTkgNDU2IDU2NS45MzggNDU2QzU2OC4zMTMgNDU2IDU3MC42NTYgNDU0LjkzOCA1NzIuMjUgNDUyLjkzOEM2MTYuNTYyIDM5Ni4yNSA2NDAgMzI4LjE1NiA2NDAgMjU2UzYxNi41NjIgMTE1Ljc1IDU3Mi4yNSA1OS4wNjJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BrakeWarning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M320.02 320C324.426 320 328.02 316.406 328.02 312V136C328.02 131.594 324.426 128 320.02 128S312.02 131.594 312.02 136V312C312.02 316.406 315.613 320 320.02 320ZM320.082 352C311.258 352 304.082 359.178 304.082 368S311.258 384 320.082 384S336.082 376.822 336.082 368S328.906 352 320.082 352ZM320 32C196.285 32 96 132.342 96 256C96 379.742 196.285 480 320 480S544 379.742 544 256C544 132.342 443.715 32 320 32ZM320 464C205.309 464 112 370.691 112 256S205.309 48 320 48S528 141.309 528 256S434.691 464 320 464ZM79 57.688C75.5 55 70.469 55.594 67.75 59.062C23.438 115.75 0 183.844 0 256S23.438 396.25 67.75 452.938C69.344 454.938 71.688 456 74.062 456C75.781 456 77.531 455.438 79 454.312C82.469 451.594 83.094 446.562 80.375 443.062C38.25 389.25 16 324.562 16 256S38.25 122.75 80.375 68.938C83.094 65.438 82.469 60.406 79 57.688ZM572.25 59.062C569.5 55.594 564.469 55 561 57.688C557.531 60.406 556.906 65.438 559.625 68.938C601.75 122.75 624 187.438 624 256S601.75 389.25 559.625 443.062C556.906 446.562 557.531 451.594 561 454.312C562.469 455.438 564.219 456 565.938 456C568.313 456 570.656 454.938 572.25 452.938C616.562 396.25 640 328.156 640 256S616.562 115.75 572.25 59.062Z" />
        </Icon>
    </>
}