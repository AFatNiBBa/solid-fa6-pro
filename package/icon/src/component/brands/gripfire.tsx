
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gripfire` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gripfire?s=brands gripfire}
 * @preview ![gripfire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIuNSAzMDEuNGMwLTczLjggMTA1LjEtMTIyLjUgMTA1LjEtMjAzIDAtNDcuMS0zNC04OC0zOS4xLTkwLjQuNCAzLjMuNiA2LjcuNiAxMEMxNzkuMSAxMTAuMSAzMiAxNzEuOSAzMiAyODYuNmMwIDQ5LjggMzIuMiA3OS4yIDY2LjUgMTA4LjMgNjUuMSA0Ni43IDc4LjEgNzEuNCA3OC4xIDg2LjYgMCAxMC4xLTQuOCAxNy00LjggMjIuMyAxMy4xLTE2LjcgMTcuNC0zMS45IDE3LjUtNDYuNCAwLTI5LjYtMjEuNy01Ni4zLTQ0LjItODYuNS0xNi0yMi4zLTMyLjYtNDIuNi0zMi42LTY5LjV6bTIwNS4zLTM5Yy0xMi4xLTY2LjgtNzgtMTI0LjQtOTQuNy0xMzAuOWw0IDcuMmMyLjQgNS4xIDMuNCAxMC45IDMuNCAxNy4xIDAgNDQuNy01NC4yIDExMS4yLTU2LjYgMTE2LjctMi4yIDUuMS0zLjIgMTAuNS0zLjIgMTUuOCAwIDIwLjEgMTUuMiA0Mi4xIDE3LjkgNDIuMSAyLjQgMCA1Ni42LTU1LjQgNTguMS04Ny43IDYuNCAxMS43IDkuMSAyMi42IDkuMSAzMy40IDAgNDEuMi00MS44IDk2LjktNDEuOCA5Ni45IDAgMTEuNiAzMS45IDUzLjIgMzUuNSA1My4yIDEgMCAyLjItMS40IDMuMi0yLjQgMzcuOS0zOS4zIDY3LjMtODUgNjcuMy0xMzYuOCAwLTgtLjctMTYuMi0yLjItMjQuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Gripfire(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z" />
        </Icon>
    </>
}