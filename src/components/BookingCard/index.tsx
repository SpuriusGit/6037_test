"use client";
import React, { useMemo, useState, useRef, JSX } from "react";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import model from "../../../public/model.svg";
import clock from "../../../public/clock.svg";
import Arrow from "@/components/BookingCard/Arrow";
import styles from "./styles.module.scss";
import {
    addDays,
    startOfDay,
    setHours,
    setMinutes,
    isBefore,
    isSameDay,
    getTime,
    format,
} from "date-fns";

export default function BookingCard(): JSX.Element {
    const today = useMemo(() => startOfDay(new Date()), []);

    const days = useMemo(() => {
        const arr: Date[] = [];
        for (let i = 0; i < 6 * 7 + 1; i++) arr.push(addDays(today, i));
        return arr;
    }, [today]);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);

    const daysRef = useRef<HTMLDivElement | null>(null);
    const timesRef = useRef<HTMLDivElement | null>(null);

    const now = new Date();

    const times = useMemo(() => {
        if (!selectedDate) return [];
        const list: Date[] = [];
        const base = startOfDay(selectedDate);
        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m += 15) {
                list.push(setMinutes(setHours(base, h), m));
            }
        }
        return list;
    }, [selectedDate]);

    const isTimeDisabled = (t: Date) => {
        if (!selectedDate) return false;
        if (isSameDay(selectedDate, now)) return isBefore(t, now);
        return false;
    };

    const handleConfirm = () => {
        if (!selectedDate || !selectedTime) return;
        const ts = Math.floor(getTime(selectedTime) / 1000);
        alert("Confirmed timestamp: " + ts);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.intro}>
                <div className={styles.intro_text}>
                    <h1 className={styles.intro_title}>Cool session</h1>
                    <p className={styles.intro_subtitle}>Additional type</p>
                    <span className={styles.intro_time}>                    <Image
                        src={clock}
                        alt="Clock"
                    />30 min</span>
                </div>
                <div className={styles.intro_model}>
                    <Image
                        src={model}
                        alt="Model"
                        className={styles.model_image}
                    />
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.card_header}>
                    <Image
                        src={avatar}
                        alt="Avatar"
                        width={120}
                        height={120}
                        className={styles.avatar}
                    />

                    <div className={styles.card_header__text}>
                        <h2>Book a Session</h2>
                        <p>
                            Choose a date and time that is convenient for you to e-meet your stylist
                        </p>
                    </div>
                </div>

                <div className={styles.months}>
                    <span>Sep</span>
                    <span>Oct</span>
                </div>

                <div className={styles.row}>
                    <Arrow
                        direction="left"
                        onClick={() =>
                            daysRef.current?.scrollBy({ left: -200, behavior: "smooth" })
                        }
                    />

                    <div ref={daysRef} className={styles.list}>
                        {days.map((d) => {
                            const active = selectedDate && isSameDay(d, selectedDate);
                            return (
                                <button
                                    key={d.toISOString()}
                                    onClick={() => {
                                        setSelectedDate(d);
                                        setSelectedTime(null);
                                    }}
                                    className={active ? styles.day_active : styles.day}
                                >
                                    <span className={styles.day_week}>{format(d, "EEE")}</span>
                                    <span className={styles.day_num}>{format(d, "d")}</span>
                                </button>
                            );
                        })}
                    </div>

                    <Arrow
                        direction="right"
                        onClick={() =>
                            daysRef.current?.scrollBy({ left: 200, behavior: "smooth" })
                        }
                    />
                </div>


                {selectedDate && (
                    <div className={styles.row}>
                        <Arrow
                            direction="left"
                            onClick={() =>
                                timesRef.current?.scrollBy({ left: -200, behavior: "smooth" })
                            }
                        />

                        <div ref={timesRef} className={styles.list}>
                            {times.map((t) => {
                                const disabled = isTimeDisabled(t);
                                const active =
                                    selectedTime && getTime(selectedTime) === getTime(t);

                                return (
                                    <button
                                        key={t.toISOString()}
                                        disabled={disabled}
                                        onClick={() => !disabled && setSelectedTime(t)}
                                        className={
                                            disabled
                                                ? styles.time_disabled
                                                : active
                                                    ? styles.time_active
                                                    : styles.time
                                        }
                                    >
                                        {format(t, "h:mm a")}
                                    </button>
                                );
                            })}
                        </div>

                        <Arrow
                            direction="right"
                            onClick={() =>
                                timesRef.current?.scrollBy({ left: 200, behavior: "smooth" })
                            }
                        />
                    </div>
                )}

                <div className={styles.confirm_wrapper}>
                    <button
                        disabled={!(selectedDate && selectedTime)}
                        onClick={handleConfirm}
                        className={
                            selectedDate && selectedTime
                                ? styles.confirm
                                : styles.confirm_disabled
                        }
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
