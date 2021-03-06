package com.ssafy.star.db.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Horoscope{
    @Id @GeneratedValue
    @Column(name="horoscope_id")
    private Long id;
    @Column(name="horoscope_category")
    private String category;
    @Column(name="horoscope_content")
    private String content;
    private LocalDate createdDate;
}
