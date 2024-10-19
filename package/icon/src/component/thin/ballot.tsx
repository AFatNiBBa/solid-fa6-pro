
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ballot` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ballot?s=thin ballot}
 * @preview ![ballot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMEg2NEMyOC42NTYgMCAwIDI4LjY1NiAwIDY0VjQ0OEMwIDQ4My4zNDQgMjguNjU2IDUxMiA2NCA1MTJIMzg0QzQxOS4zNDQgNTEyIDQ0OCA0ODMuMzQ0IDQ0OCA0NDhWNjRDNDQ4IDI4LjY1NiA0MTkuMzQ0IDAgMzg0IDBaTTQzMiA0NDhDNDMyIDQ3NC40NjkgNDEwLjQ2OSA0OTYgMzg0IDQ5Nkg2NEMzNy41MzEgNDk2IDE2IDQ3NC40NjkgMTYgNDQ4VjY0QzE2IDM3LjUzMSAzNy41MzEgMTYgNjQgMTZIMzg0QzQxMC40NjkgMTYgNDMyIDM3LjUzMSA0MzIgNjRWNDQ4Wk0zNzYgMTIwSDIwMEMxOTUuNTk0IDEyMCAxOTIgMTIzLjU3OCAxOTIgMTI4UzE5NS41OTQgMTM2IDIwMCAxMzZIMzc2QzM4MC40MDYgMTM2IDM4NCAxMzIuNDIyIDM4NCAxMjhTMzgwLjQwNiAxMjAgMzc2IDEyMFpNMzc2IDI0OEgyMDBDMTk1LjU5NCAyNDggMTkyIDI1MS41NzggMTkyIDI1NlMxOTUuNTk0IDI2NCAyMDAgMjY0SDM3NkMzODAuNDA2IDI2NCAzODQgMjYwLjQyMiAzODQgMjU2UzM4MC40MDYgMjQ4IDM3NiAyNDhaTTM3NiAzNzZIMjAwQzE5NS41OTQgMzc2IDE5MiAzNzkuNTc4IDE5MiAzODRTMTk1LjU5NCAzOTIgMjAwIDM5MkgzNzZDMzgwLjQwNiAzOTIgMzg0IDM4OC40MjIgMzg0IDM4NFMzODAuNDA2IDM3NiAzNzYgMzc2Wk0xMDQgODhIODhDNzAuMzI4IDg4IDU2IDEwMi4zMjYgNTYgMTIwVjEzNkM1NiAxNTMuNjc0IDcwLjMyOCAxNjggODggMTY4SDEwNEMxMjEuNjcyIDE2OCAxMzYgMTUzLjY3NCAxMzYgMTM2VjEyMEMxMzYgMTAyLjMyNiAxMjEuNjcyIDg4IDEwNCA4OFpNMTIwIDEzNkMxMjAgMTQ0LjgyMiAxMTIuODI0IDE1MiAxMDQgMTUySDg4Qzc5LjE3NiAxNTIgNzIgMTQ0LjgyMiA3MiAxMzZWMTIwQzcyIDExMS4xNzggNzkuMTc2IDEwNCA4OCAxMDRIMTA0QzExMi44MjQgMTA0IDEyMCAxMTEuMTc4IDEyMCAxMjBWMTM2Wk0xMDQgMjE2SDg4QzcwLjMyOCAyMTYgNTYgMjMwLjMyNiA1NiAyNDhWMjY0QzU2IDI4MS42NzQgNzAuMzI4IDI5NiA4OCAyOTZIMTA0QzEyMS42NzIgMjk2IDEzNiAyODEuNjc0IDEzNiAyNjRWMjQ4QzEzNiAyMzAuMzI2IDEyMS42NzIgMjE2IDEwNCAyMTZaTTEyMCAyNjRDMTIwIDI3Mi44MjIgMTEyLjgyNCAyODAgMTA0IDI4MEg4OEM3OS4xNzYgMjgwIDcyIDI3Mi44MjIgNzIgMjY0VjI0OEM3MiAyMzkuMTc4IDc5LjE3NiAyMzIgODggMjMySDEwNEMxMTIuODI0IDIzMiAxMjAgMjM5LjE3OCAxMjAgMjQ4VjI2NFpNMTA0IDM0NEg4OEM3MC4zMjggMzQ0IDU2IDM1OC4zMjYgNTYgMzc2VjM5MkM1NiA0MDkuNjc0IDcwLjMyOCA0MjQgODggNDI0SDEwNEMxMjEuNjcyIDQyNCAxMzYgNDA5LjY3NCAxMzYgMzkyVjM3NkMxMzYgMzU4LjMyNiAxMjEuNjcyIDM0NCAxMDQgMzQ0Wk0xMjAgMzkyQzEyMCA0MDAuODIyIDExMi44MjQgNDA4IDEwNCA0MDhIODhDNzkuMTc2IDQwOCA3MiA0MDAuODIyIDcyIDM5MlYzNzZDNzIgMzY3LjE3OCA3OS4xNzYgMzYwIDg4IDM2MEgxMDRDMTEyLjgyNCAzNjAgMTIwIDM2Ny4xNzggMTIwIDM3NlYzOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Ballot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 0H64C28.656 0 0 28.656 0 64V448C0 483.344 28.656 512 64 512H384C419.344 512 448 483.344 448 448V64C448 28.656 419.344 0 384 0ZM432 448C432 474.469 410.469 496 384 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H384C410.469 16 432 37.531 432 64V448ZM376 120H200C195.594 120 192 123.578 192 128S195.594 136 200 136H376C380.406 136 384 132.422 384 128S380.406 120 376 120ZM376 248H200C195.594 248 192 251.578 192 256S195.594 264 200 264H376C380.406 264 384 260.422 384 256S380.406 248 376 248ZM376 376H200C195.594 376 192 379.578 192 384S195.594 392 200 392H376C380.406 392 384 388.422 384 384S380.406 376 376 376ZM104 88H88C70.328 88 56 102.326 56 120V136C56 153.674 70.328 168 88 168H104C121.672 168 136 153.674 136 136V120C136 102.326 121.672 88 104 88ZM120 136C120 144.822 112.824 152 104 152H88C79.176 152 72 144.822 72 136V120C72 111.178 79.176 104 88 104H104C112.824 104 120 111.178 120 120V136ZM104 216H88C70.328 216 56 230.326 56 248V264C56 281.674 70.328 296 88 296H104C121.672 296 136 281.674 136 264V248C136 230.326 121.672 216 104 216ZM120 264C120 272.822 112.824 280 104 280H88C79.176 280 72 272.822 72 264V248C72 239.178 79.176 232 88 232H104C112.824 232 120 239.178 120 248V264ZM104 344H88C70.328 344 56 358.326 56 376V392C56 409.674 70.328 424 88 424H104C121.672 424 136 409.674 136 392V376C136 358.326 121.672 344 104 344ZM120 392C120 400.822 112.824 408 104 408H88C79.176 408 72 400.822 72 392V376C72 367.178 79.176 360 88 360H104C112.824 360 120 367.178 120 376V392Z" />
        </Icon>
    </>
}