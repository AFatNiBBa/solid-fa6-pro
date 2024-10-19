
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `truck-ramp-box` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp-box?s=regular truck-ramp-box}
 * @preview ![truck-ramp-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MC4yNjQgMzc1LjYxNUM1Mi41MTQgMzg0LjExNSA2MS4yNjQgMzg5LjI0IDY5Ljc2NCAzODYuODY1TDI4Ni4yNjQgMzI4Ljg2NUMyOTQuNzY0IDMyNi42MTUgMjk5Ljc2NCAzMTcuNzQgMjk3LjUxNCAzMDkuMjRMMjQ3Ljc2NCAxMjMuNzRDMjQ1LjUxNCAxMTUuMjQgMjM2Ljc2NCAxMTAuMjQgMjI4LjI2NCAxMTIuNDlMMTUxLjAxNCAxMzMuMjRMMTc1Ljc2NCAyMjUuOTlMMTE0LjAxNCAyNDIuNDlMODkuMjY0IDE0OS43NEwxMS44ODkgMTcwLjQ5QzMuMzg5IDE3Mi43NCAtMS43MzYgMTgxLjYxNSAwLjYzOSAxOTAuMTE1TDUwLjI2NCAzNzUuNjE1Wk01MjggMjg4QzQ4My4zOTkgMjg4IDQ0NS4yMDYgMzE0LjI2NiA0MjcuMTkgMzUySDM5OS45OTlWNjRDMzk5Ljk5OSA1NS4xNjIgNDA3LjE2MyA0OCA0MTUuOTk5IDQ4SDYxNkM2MjkuMjU0IDQ4IDY0MCAzNy4yNTQgNjQwIDI0QzY0MCAxMC43NDQgNjI5LjI1NCAwIDYxNiAwSDQxNS45OTlDMzgwLjY1MyAwIDM1MS45OTkgMjguNjUyIDM1MS45OTkgNjRWMzYxLjg1NUwxNi44NzIgNDY1LjA3OEM0LjIxNSA0NjkuMDE2IC0yLjg0NyA0ODIuNDY5IDEuMDkgNDk1LjEyNUM0LjI3OCA1MDUuNDA2IDEzLjc0NyA1MTIgMjMuOTk3IDUxMkMyNi4zNCA1MTIgMjguNzQ3IDUxMS42NTYgMzEuMTIyIDUxMC45MjJMMzg3LjY1NSA0MDBINDE1Ljk5OUM0MTUuOTk5IDQ2MS44NTUgNDY2LjE0NSA1MTIgNTI4IDUxMlM2NDAgNDYxLjg1NSA2NDAgNDAwUzU4OS44NTYgMjg4IDUyOCAyODhaTTUyOCA0NjRDNDkyLjY1NSA0NjQgNDY0IDQzNS4zNDYgNDY0IDQwMEM0NjQgMzY0LjY1MiA0OTIuNjU1IDMzNiA1MjggMzM2UzU5MiAzNjQuNjUyIDU5MiA0MDBDNTkyIDQzNS4zNDYgNTYzLjM0NiA0NjQgNTI4IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TruckRampBox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M50.264 375.615C52.514 384.115 61.264 389.24 69.764 386.865L286.264 328.865C294.764 326.615 299.764 317.74 297.514 309.24L247.764 123.74C245.514 115.24 236.764 110.24 228.264 112.49L151.014 133.24L175.764 225.99L114.014 242.49L89.264 149.74L11.889 170.49C3.389 172.74 -1.736 181.615 0.639 190.115L50.264 375.615ZM528 288C483.399 288 445.206 314.266 427.19 352H399.999V64C399.999 55.162 407.163 48 415.999 48H616C629.254 48 640 37.254 640 24C640 10.744 629.254 0 616 0H415.999C380.653 0 351.999 28.652 351.999 64V361.855L16.872 465.078C4.215 469.016 -2.847 482.469 1.09 495.125C4.278 505.406 13.747 512 23.997 512C26.34 512 28.747 511.656 31.122 510.922L387.655 400H415.999C415.999 461.855 466.145 512 528 512S640 461.855 640 400S589.856 288 528 288ZM528 464C492.655 464 464 435.346 464 400C464 364.652 492.655 336 528 336S592 364.652 592 400C592 435.346 563.346 464 528 464Z" />
        </Icon>
    </>
}