
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `table-cells-large` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=thin table-cells-large}
 * @preview ![table-cells-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMjU0IDUwLjc0NEM0ODEuNjc0IDM5LjE2NCA0NjUuNjc0IDMyIDQ0OCAzMkg2NEM0Ni4zMjYgMzIgMzAuMzI2IDM5LjE2NCAxOC43NDYgNTAuNzQ0QzcuMTY0IDYyLjMyNiAwIDc4LjMyNiAwIDk2VjQxNkMwIDQzMy42NzQgNy4xNjQgNDQ5LjY3NCAxOC43NDYgNDYxLjI1NEMzMC4zMjYgNDcyLjgzNiA0Ni4zMjYgNDgwIDY0IDQ4MEg0NDhDNDY1LjY3NCA0ODAgNDgxLjY3NCA0NzIuODM2IDQ5My4yNTQgNDYxLjI1NEM1MDQuODM2IDQ0OS42NzQgNTEyIDQzMy42NzQgNTEyIDQxNlY5NkM1MTIgNzguMzI2IDUwNC44MzYgNjIuMzI2IDQ5My4yNTQgNTAuNzQ0Wk0yNDggNDY0SDY0QzUxLjE3OCA0NjQgMzkuMTI1IDQ1OS4wMDYgMzAuMDU5IDQ0OS45MzlDMjAuOTkyIDQ0MC44NzUgMTYgNDI4LjgyMiAxNiA0MTZWMjY0SDI0OFY0NjRaTTI0OCAyNDhIMTZWOTZDMTYgODMuMTc4IDIwLjk5NCA3MS4xMjUgMzAuMDYxIDYyLjA1N0MzOS4xMjUgNTIuOTkyIDUxLjE3OCA0OCA2NCA0OEgyNDhWMjQ4Wk00OTYgNDE2QzQ5NiA0MjguODIyIDQ5MS4wMDggNDQwLjg3NSA0ODEuOTM5IDQ0OS45NDFDNDcyLjg3NSA0NTkuMDA2IDQ2MC44MjIgNDY0IDQ0OCA0NjRIMjY0VjI2NEg0OTZWNDE2Wk00OTYgMjQ4SDI2NFY0OEg0NDhDNDYwLjgyMiA0OCA0NzIuODc1IDUyLjk5MiA0ODEuOTM5IDYyLjA1N0M0OTEuMDA2IDcxLjEyNSA0OTYgODMuMTc4IDQ5NiA5NlYyNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TableCellsLarge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.254 50.744C481.674 39.164 465.674 32 448 32H64C46.326 32 30.326 39.164 18.746 50.744C7.164 62.326 0 78.326 0 96V416C0 433.674 7.164 449.674 18.746 461.254C30.326 472.836 46.326 480 64 480H448C465.674 480 481.674 472.836 493.254 461.254C504.836 449.674 512 433.674 512 416V96C512 78.326 504.836 62.326 493.254 50.744ZM248 464H64C51.178 464 39.125 459.006 30.059 449.939C20.992 440.875 16 428.822 16 416V264H248V464ZM248 248H16V96C16 83.178 20.994 71.125 30.061 62.057C39.125 52.992 51.178 48 64 48H248V248ZM496 416C496 428.822 491.008 440.875 481.939 449.941C472.875 459.006 460.822 464 448 464H264V264H496V416ZM496 248H264V48H448C460.822 48 472.875 52.992 481.939 62.057C491.006 71.125 496 83.178 496 96V248Z" />
        </Icon>
    </>
}