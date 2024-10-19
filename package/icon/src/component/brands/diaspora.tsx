
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diaspora` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diaspora?s=brands diaspora}
 * @preview ![diaspora](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTEuNjQgMzU0LjU1Yy0xLjQgMC04OCAxMTkuOS04OC43IDExOS45Uzc2LjM0IDQxNCA3NiA0MTMuMjVzODYuNi0xMjUuNyA4Ni42LTEyNy40YzAtMi4yLTEyOS42LTQ0LTEzNy42LTQ3LjEtMS4zLS41IDMxLjQtMTAxLjggMzEuNy0xMDIuMS42LS43IDE0NC40IDQ3IDE0NS41IDQ3IC40IDAgLjktLjYgMS0xLjMuNC0yIDEtMTQ4LjYgMS43LTE0OS42LjgtMS4yIDEwNC41LS43IDEwNS4xLS4zIDEuNSAxIDMuNSAxNTYuMSA2LjEgMTU2LjEgMS40IDAgMTM4LjctNDcgMTM5LjMtNDYuMy44LjkgMzEuOSAxMDIuMiAzMS41IDEwMi42LS45LjktMTQwLjIgNDcuMS0xNDAuNiA0OC44LS4zIDEuNCA4Mi44IDEyMi4xIDgyLjUgMTIyLjlzLTg1LjUgNjMuNS04Ni4zIDYzLjVjLTEtLjItODktMTI1LjUtOTAuOS0xMjUuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Diaspora(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M251.64 354.55c-1.4 0-88 119.9-88.7 119.9S76.34 414 76 413.25s86.6-125.7 86.6-127.4c0-2.2-129.6-44-137.6-47.1-1.3-.5 31.4-101.8 31.7-102.1.6-.7 144.4 47 145.5 47 .4 0 .9-.6 1-1.3.4-2 1-148.6 1.7-149.6.8-1.2 104.5-.7 105.1-.3 1.5 1 3.5 156.1 6.1 156.1 1.4 0 138.7-47 139.3-46.3.8.9 31.9 102.2 31.5 102.6-.9.9-140.2 47.1-140.6 48.8-.3 1.4 82.8 122.1 82.5 122.9s-85.5 63.5-86.3 63.5c-1-.2-89-125.5-90.9-125.5z" />
        </Icon>
    </>
}