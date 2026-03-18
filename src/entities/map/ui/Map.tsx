"use client";

import Script from "next/script";
import { useRef } from "react";

import { YANDEX_MAP_URL } from "@/shared/constants";

export default function Map() {
	const mapRef = useRef<HTMLDivElement>(null);

	const initMap = async () => {
		await window.ymaps3.ready;

		const { YMap, YMapDefaultSchemeLayer } = window.ymaps3;

		if (mapRef.current) {
			const map = new YMap(mapRef.current, {
				location: {
					center: [37.617734, 55.751999], //TODO будет динамика когда Redux затяну
					zoom: 10,
				},
			});

			map.addChild(new YMapDefaultSchemeLayer({}));
		}
	};

	return (
		<div>
			<Script src={YANDEX_MAP_URL} onLoad={initMap} />
			<div className="rounded-xs overflow-hidden h-[355px]" ref={mapRef}></div>
		</div>
	);
}
