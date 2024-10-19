
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wpbeginner` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wpbeginner?s=brands wpbeginner}
 * @preview ![wpbeginner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjIuNzk5IDMyMi4zNzRDNTE5LjAxIDM4Ni42ODIgNDY2Ljk2MSA0ODAgMzcwLjk0NCA0ODBjLTM5LjYwMiAwLTc4LjgyNC0xNy42ODctMTAwLjE0Mi01MC4wNC02Ljg4Ny4zNTYtMjIuNzAyLjM1Ni0yOS41OSAwQzIxOS44NDggNDYyLjM4MSAxODAuNTg4IDQ4MCAxNDEuMDY5IDQ4MGMtOTUuNDkgMC0xNDguMzQ4LTkyLjk5Ni05MS44NTUtMTU3LjYyNkMtMjkuOTI1IDE5MC41MjMgODAuNDc5IDMyIDI1Ni4wMDYgMzJjMTc1LjYzMiAwIDI4NS44NyAxNTguNjI2IDIwNi43OTMgMjkwLjM3NHptLTMzOS42NDctODIuOTcyaDQxLjUyOXYtNTguMDc1aC00MS41Mjl2NTguMDc1em0yMTcuMTggODYuMDcydi0yMy44MzljLTYwLjUwNiAyMC45MTUtMTMyLjM1NSA5LjE5OC0xODcuNTg5LTMzLjk3MWwuMjQ2IDI0Ljg5N2M1MS4xMDEgNDYuMzY3IDEzMS43NDYgNTcuODc1IDE4Ny4zNDMgMzIuOTEzem0tMTUwLjc1My04Ni4wNzJoMTY2LjA1OHYtNTguMDc1SDE4OS41Nzl2NTguMDc1eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Wpbeginner(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M462.799 322.374C519.01 386.682 466.961 480 370.944 480c-39.602 0-78.824-17.687-100.142-50.04-6.887.356-22.702.356-29.59 0C219.848 462.381 180.588 480 141.069 480c-95.49 0-148.348-92.996-91.855-157.626C-29.925 190.523 80.479 32 256.006 32c175.632 0 285.87 158.626 206.793 290.374zm-339.647-82.972h41.529v-58.075h-41.529v58.075zm217.18 86.072v-23.839c-60.506 20.915-132.355 9.198-187.589-33.971l.246 24.897c51.101 46.367 131.746 57.875 187.343 32.913zm-150.753-86.072h166.058v-58.075H189.579v58.075z" />
        </Icon>
    </>
}