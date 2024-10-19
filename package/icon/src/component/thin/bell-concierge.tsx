
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bell-concierge` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bell-concierge?s=thin bell-concierge}
 * @preview ![bell-concierge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQgNDMySDhDMy41NzggNDMyIDAgNDM1LjU3OCAwIDQ0MFMzLjU3OCA0NDggOCA0NDhINTA0QzUwOC40MjIgNDQ4IDUxMiA0NDQuNDIyIDUxMiA0NDBTNTA4LjQyMiA0MzIgNTA0IDQzMlpNMzIgMzkyQzM2LjQyMiAzOTIgNDAgMzg4LjQyMiA0MCAzODRDNDAgMjY0Ljg5MSAxMzYuODkxIDE2OCAyNTYgMTY4UzQ3MiAyNjQuODkxIDQ3MiAzODRDNDcyIDM4OC40MjIgNDc1LjU3OCAzOTIgNDgwIDM5MlM0ODggMzg4LjQyMiA0ODggMzg0QzQ4OCAyNTguNzc5IDM4OC4yMDEgMTU2LjY3IDI2NCAxNTIuNDA0VjgwSDMxMkMzMTYuNDIyIDgwIDMyMCA3Ni40MjIgMzIwIDcyUzMxNi40MjIgNjQgMzEyIDY0SDIwMEMxOTUuNTc4IDY0IDE5MiA2Ny41NzggMTkyIDcyUzE5NS41NzggODAgMjAwIDgwSDI0OFYxNTIuNDA0QzEyMy43OTkgMTU2LjY3IDI0IDI1OC43NzkgMjQgMzg0QzI0IDM4OC40MjIgMjcuNTc4IDM5MiAzMiAzOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BellConcierge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504 432H8C3.578 432 0 435.578 0 440S3.578 448 8 448H504C508.422 448 512 444.422 512 440S508.422 432 504 432ZM32 392C36.422 392 40 388.422 40 384C40 264.891 136.891 168 256 168S472 264.891 472 384C472 388.422 475.578 392 480 392S488 388.422 488 384C488 258.779 388.201 156.67 264 152.404V80H312C316.422 80 320 76.422 320 72S316.422 64 312 64H200C195.578 64 192 67.578 192 72S195.578 80 200 80H248V152.404C123.799 156.67 24 258.779 24 384C24 388.422 27.578 392 32 392Z" />
        </Icon>
    </>
}