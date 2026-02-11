-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

-- DROP SEQUENCE public.itinerary_id_seq;

CREATE SEQUENCE public.itinerary_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.itinerary_trip_id_seq;

CREATE SEQUENCE public.itinerary_trip_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.trip_id_seq;

CREATE SEQUENCE public.trip_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;-- public.trip definição

-- Drop table

-- DROP TABLE public.trip;

CREATE TABLE public.trip (
	slug varchar NULL,
	category_id int4 NULL,
	title varchar NULL,
	subtitle varchar NULL,
	region varchar NULL,
	distance int4 NULL,
	duration int4 NULL,
	level_type int4 NULL,
	difficulty_type int4 NULL,
	history varchar NULL,
	experience varchar NULL,
	image varchar NULL,
	id bigserial NOT NULL,
	CONSTRAINT trip_pk PRIMARY KEY (id)
);


-- public.itinerary definição

-- Drop table

-- DROP TABLE public.itinerary;

CREATE TABLE public.itinerary (
	id bigserial NOT NULL,
	itinerary_source varchar NULL,
	itinerary_target varchar NULL,
	trip_id int8 NOT NULL,
	travel_time int4 DEFAULT 0 NULL,
	travel_distance int4 DEFAULT 0 NULL,
	CONSTRAINT itinerary_pk PRIMARY KEY (id),
	CONSTRAINT itinerary_trip_fk FOREIGN KEY (trip_id) REFERENCES public.trip(id)
);


-- public.trip_vw fonte

CREATE OR REPLACE VIEW public.trip_vw
AS SELECT t.slug,
        CASE t.category_id
            WHEN 1 THEN 'historicas'::text
            WHEN 2 THEN 'cenicas'::text
            WHEN 3 THEN 'tematicas'::text
            WHEN 4 THEN 'cinematograficas'::text
            WHEN 5 THEN 'serras'::text
            ELSE NULL::text
        END AS categoria,
    t.title AS titulo,
    t.subtitle AS subtitulo,
    t.region AS regiao,
    t.distance::text || ' m'::text AS distancia,
    t.duration::text || ' dias'::text AS duracao,
        CASE t.level_type
            WHEN 1 THEN 'Fácil'::text
            WHEN 2 THEN 'Intermediário'::text
            WHEN 3 THEN 'Difícil'::text
            ELSE 'Não informado'::text
        END AS nivel,
        CASE t.difficulty_type
            WHEN 1 THEN 'Asfalto'::text
            WHEN 2 THEN 'Terra'::text
            WHEN 3 THEN 'Misto'::text
            ELSE 'Não informado'::text
        END AS tipo,
    t.history AS historia,
    string_agg(((((i.itinerary_source::text || ' -> '::text) || i.itinerary_target::text) || ' ('::text) || i.travel_distance::text) || ' km)'::text, ' | '::text ORDER BY i.id) AS caminho,
    t.experience AS experiencia,
    t.image AS imagem
   FROM trip t
     LEFT JOIN itinerary i ON i.trip_id = t.id
  GROUP BY t.slug, t.category_id, t.title, t.subtitle, t.region, t.distance, t.duration, t.level_type, t.difficulty_type, t.history, t.experience, t.image;