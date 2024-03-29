package com.hufsSchedule.hufsScheduleSystem.Entity;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name="Credit")
public class Credit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="credit_id", unique = true)
    private Long creditId;
    @Column(name="first_major")
    private int firstMajor;
    @Column(name="second_major")
    private int secondMajor;
    @Column(name="sub_major")
    private int subMajor;
    private int minor;
    private int outDoor;
    @Column(name="liberal_arts")
    private int liberalArts;
    private int teaching;
    private int optional;
    @Column(name="total_credit")
    private int totalCredit;
    @Column(name = "average_score")
    private float averageScore;
    @OneToOne(fetch=FetchType.LAZY, cascade = CascadeType.PERSIST, optional = false)
    @JoinColumn(name="user_credit", referencedColumnName = "user_id")
    private User user;

}
